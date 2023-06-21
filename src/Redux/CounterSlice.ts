import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
   value: number
}
const initialState: CounterState = { value: 0 }
const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      increment: (state, action: PayloadAction<number>) => {
         state.value += action.payload
      },
      decrement: (state, action: PayloadAction<number>) => {
         state.value -= action.payload
      },
      clear: (state) => {
         state.value = 0
      },
   },
})
export const { increment, decrement, clear } = counterSlice.actions
export default counterSlice.reducer
