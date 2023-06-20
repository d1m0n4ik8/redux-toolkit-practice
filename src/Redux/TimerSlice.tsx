import { createSlice } from '@reduxjs/toolkit'

interface timerState {
   hours: number
   minutes: number
   seconds: number
}

const initialState: timerState = {
   hours: 0,
   minutes: 0,
   seconds: 0,
}

const timerSlice = createSlice({
   name: 'timer',
   initialState,
   reducers: {
      startTimer: (state) => {
         state.seconds += 1
         if (state.seconds >= 60) {
            state.seconds = 0
            state.minutes += 1
            if (state.minutes >= 60) {
               state.minutes = 0
               state.hours += 1
            }
         }
      },

      clearTimer: (state) => {
         state.hours = 0
         state.minutes = 0
         state.seconds = 0
      },
   },
})

export const { startTimer, clearTimer } = timerSlice.actions
export default timerSlice.reducer
