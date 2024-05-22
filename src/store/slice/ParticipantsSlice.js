import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $host } from "../../axios";
import { PARTICIPANTS_URL } from "../../utils/consts";

export const getParticipants = createAsyncThunk(
  "events/getParticipants",
  async (id, thunkAPI) => {
    try {
      const { data } = await $host(`/participant/${id}`);
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const searchParticipants = createAsyncThunk(
  "events/getParticipants",
  async (params, thunkAPI) => {
    try {
      const { data } = await $host(`/participant/${params.id}`, {
        params: { fullName: params.fullName, email: params.email },
      });
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerParticipants = createAsyncThunk(
  "events/registerParticipants",
  async ({ navigate, ...payload }, thunkAPI) => {
    try {
      const { data } = await $host.post(`/participant/${payload.id}`, {
        ...payload.values,
      });
      alert("You have successfully registered");
      navigate(`${PARTICIPANTS_URL}/${payload.id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  list: [],
  isLoading: true,
  totalCount: 0,
  validErr: {},
};

const participantsSlice = createSlice({
  name: "participants",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getParticipants.pending, (state, { payload }) => {
        state.isLoading = true;
        state.list = [];
      })
      .addCase(getParticipants.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.list = payload.data.participants;
        state.title = payload.data.title;
        state.totalCount = payload.data.totalCount;
      })
      .addCase(getParticipants.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.list = [];
        state.title = "";
        state.totalCount = 0;
      })

      .addCase(registerParticipants.fulfilled, (state, { payload }) => {
        state.validErr = {};
      })
      .addCase(registerParticipants.rejected, (state, { payload }) => {
        state.validErr = payload;
      });
  },
});

export default participantsSlice.reducer;
