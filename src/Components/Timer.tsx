import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/Hooks'
import { RootState } from '../Redux/Store'
import { clearTimer, startTimer } from '../Redux/TimerSlice'

const Timer = () => {
   const { hours, minutes, seconds } = useAppSelector((state: RootState) => state.timer)
   const dispatch = useAppDispatch()
   const [timerId, setTimerId] = useState(0)
   const start = () => {
      if (!timerId) {
         const time = setInterval(() => {
            dispatch(startTimer())
         }, 1000)
         setTimerId(+time)
      }
   }
   const stop = () => {
      clearInterval(timerId)
      setTimerId(0)
   }
   return (
      <div className="flex flex-col items-center justify-center align-middle w-full h-full text-3xl ">
         <div className="text-8xl pb-8">
            {hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:
            {seconds < 10 ? '0' + seconds : seconds}
         </div>
         <div className="pb-8 space-x-3">
            <button className="py-2 px-4 rounded-xl border-2 border-sky-400" onClick={start}>
               Start
            </button>
            <button className="py-2 px-4 rounded-xl border-2 border-sky-400" onClick={stop}>
               Stop
            </button>
         </div>
         <button className="py-2 px-4 rounded-xl border-2 w-1/2 border-sky-400" onClick={() => dispatch(clearTimer())}>
            Clear
         </button>
      </div>
   )
}
export default Timer
