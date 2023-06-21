import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'
import timerReducer from './TimerSlice'
import postsReducer from './PostsSlice'

const store = configureStore({
   reducer: {
      counter: counterReducer,
      timer: timerReducer,
      posts: postsReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
