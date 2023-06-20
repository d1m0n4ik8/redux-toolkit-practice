import { useState } from 'react'
import { decrement, increment, incrementByAmount, clear, decrementByAmount } from '../Redux/Counter'
import { useAppDispatch, useAppSelector } from '../Redux/Hooks'
import { RootState } from '../Redux/Store'

const Counter = () => {
   const value = useAppSelector((state: RootState) => state.counter.value)
   const [inputValue, setInputValue] = useState('')
   const dispatch = useAppDispatch()
   const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
   }
   return (
      <div className="flex flex-col items-center justify-center align-middle w-full h-full text-3xl ">
         <div className="text-8xl pb-8">{value}</div>
         <div className="pb-8 space-x-3">
            <button className="py-2 px-4 rounded-xl border-2 border-sky-400" onClick={() => dispatch(increment())}>
               Increment
            </button>
            <button className="py-2 px-4 rounded-xl border-2 border-sky-400" onClick={() => dispatch(decrement())}>
               Decrement
            </button>
         </div>

         <div className="pb-8 space-x-3 flex flex-col items-center justify-center space-y-8 xl:block">
            <input
               className="py-2 px-4 rounded-xl outline-none border-2 text-center border-sky-400 bg-stone-900 focus:border-sky-500 hover:border-sky-500"
               type="text"
               value={inputValue}
               onChange={setValue}
            />
            <button
               className="py-2 px-4 rounded-xl border-2 border-sky-400"
               onClick={() => dispatch(decrementByAmount(+inputValue))}>
               Decrement by amount
            </button>

            <button
               className="py-2 px-4 rounded-xl border-2 border-sky-400"
               onClick={() => dispatch(incrementByAmount(+inputValue))}>
               Increment by amount
            </button>
         </div>
         <button className="py-2 px-4 rounded-xl border-2 w-1/2 border-sky-400" onClick={() => dispatch(clear())}>
            Clear
         </button>
      </div>
   )
}
export default Counter
