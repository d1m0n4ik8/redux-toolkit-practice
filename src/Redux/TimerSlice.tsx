import { createSlice } from '@reduxjs/toolkit'

interface timerState {
   timerId: ReturnType<typeof setInterval> | undefined
   hours: number
   minutes: number
   seconds: number
}

const initialState: timerState = {
   timerId: undefined,
   hours: 0,
   minutes: 0,
   seconds: 0,
}

const timerSlice = createSlice({
   name: 'timer',
   initialState,
   reducers: {
      startTimer: (state) => {
         state.timerId = setInterval(() => {
            state.seconds += 1
            if (state.seconds >= 60) {
               state.seconds = 0
               state.minutes += 1
               if (state.minutes >= 60) {
                  state.minutes = 0
                  state.hours += 1
               }
            }
         }, 1000)
      },
      stopTimer: (state) => {
         clearInterval(state.timerId)
      },
      clearTimer: (state) => {
         state.hours = 0
         state.minutes = 0
         state.seconds = 0
      },
   },
})

export const { startTimer } = timerSlice.actions
export default timerSlice.reducer
