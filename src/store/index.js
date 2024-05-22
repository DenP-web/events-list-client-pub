import {configureStore} from '@reduxjs/toolkit'
import eventSlice from './slice/EventSlice'
import participantsSlice from './slice/ParticipantsSlice'


export const store = configureStore({
  reducer: {
    events: eventSlice,
    participants: participantsSlice
  }
})