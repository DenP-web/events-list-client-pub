import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $host } from "../../axios";

export const getEvents = createAsyncThunk(
  "events/getEvents",
  async (params, thunkAPI) => {
    try {
      const { data } = await $host("/events", {
        params: {...params},
      });
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  list: [],
  isLoading: true,
  totalCount: 0,
  page: 1,
  sortBy: "",
  limit: 9,
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.isLoading = true;
        state.list = [];
        state.totalCount = 0;
      })
      .addCase(getEvents.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.list = payload.events;
        state.totalCount = payload.totalCount;
      })
      .addCase(getEvents.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.list = [];
        state.totalCount = 0;
        alert(payload)
      })
  },
});

export const { setSortBy, setPage } = eventSlice.actions;

export default eventSlice.reducer;
