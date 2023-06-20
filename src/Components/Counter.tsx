import { useState } from 'react'
import { decrement, increment, incrementByAmount, clear, decrementByAmount } from '../Redux/Counter'
import { useAppDispatch, useAppSelector } from '../Redux/Hooks'

const Counter = () => {
   const value = useAppSelector((state) => state.counter.value)
   const [inputValue, setInputValue] = useState('')
   const dispatch = useAppDispatch()
   const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
   }
   return (
      <div className="flex flex-col items-center justify-center align-middle w-full h-full text-3xl ">
         <div className="text-8xl pb-8">{value}</div>
         <div className="pb-8 space-x-3">
            <button className="py-2 px-4 rounded-xl border-2" onClick={() => dispatch(increment())}>
               Increment
            </button>
            <button className="py-2 px-4 rounded-xl border-2" onClick={() => dispatch(decrement())}>
               Decrement
            </button>
         </div>

         <div className="pb-8 space-x-3">
            <button className="py-2 px-4 rounded-xl border-2" onClick={() => dispatch(decrementByAmount(+inputValue))}>
               Decrement by amount
            </button>
            <input
               className="py-2 px-4 rounded-xl border-2 text-center"
               type="text"
               value={inputValue}
               onChange={setValue}
            />
            <button className="py-2 px-4 rounded-xl border-2" onClick={() => dispatch(incrementByAmount(+inputValue))}>
               Increment by amount
            </button>
         </div>
         <button className="py-2 px-4 rounded-xl border-2 w-1/2" onClick={() => dispatch(clear())}>
            Clear
         </button>
      </div>
   )
}
export default Counter
