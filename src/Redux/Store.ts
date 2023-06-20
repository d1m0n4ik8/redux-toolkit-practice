import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'
import timerReducer from './TimerSlice'

const store = configureStore({
   reducer: {
      counter: counterReducer,
      timer: timerReducer,
   },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
