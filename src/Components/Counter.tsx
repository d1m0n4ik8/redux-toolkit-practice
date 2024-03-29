import { useState } from 'react'
import { clear, decrement, increment } from '../Redux/CounterSlice'
import { useAppDispatch, useAppSelector } from '../Redux/Hooks'
import { RootState } from '../Redux/Store'

const Counter = () => {
	const value = useAppSelector((state: RootState) => state.counter.value)
	const [inputValue, setInputValue] = useState(0)
	const dispatch = useAppDispatch()
	const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)
		isNaN(value) ? alert('Enter number') : setInputValue(value)
	}
	return (
		<div className='flex flex-col items-center justify-center align-middle w-full h-full text-3xl '>
			<div className='text-8xl pb-8'>{value}</div>
			<div className='space-x-3'>
				<button className='py-2 px-4 rounded-xl border-2 border-sky-400' onClick={() => dispatch(increment(1))}>
					Increment
				</button>
				<button className='py-2 px-4 rounded-xl border-2 border-sky-400' onClick={() => dispatch(decrement(1))}>
					Decrement
				</button>
			</div>

			<div className='pb-8 space-x-3 flex flex-col items-center justify-center space-y-8 xl:block'>
				<input
					className='py-2 px-4 rounded-xl outline-none border-2 text-center border-sky-400 bg-stone-900 placeholder:text-grey focus:border-sky-500 hover:border-sky-500'
					type='text'
					value={inputValue}
					onChange={setValue}
					placeholder='Input value'
				/>
				<button
					className='py-2 px-4 rounded-xl border-2 border-sky-400'
					onClick={() => dispatch(increment(inputValue))}>
					Increment by amount
				</button>

				<button
					className='py-2 px-4 rounded-xl border-2 border-sky-400'
					onClick={() => dispatch(decrement(inputValue))}>
					Decrement by amount
				</button>
			</div>
			<button className='py-2 px-4 rounded-xl border-2 w-1/2 border-sky-400' onClick={() => dispatch(clear())}>
				Clear
			</button>
		</div>
	)
}
export default Counter
