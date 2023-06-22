import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'

const Counter = lazy(() => import('./Components/Counter'))
const Timer = lazy(() => import('./Components/Timer'))
const Posts = lazy(() => import('./Components/Posts'))
const PageNotFound = lazy(() => import('./Components/PageNotFound'))

const App = () => {
	return (
		<Suspense fallback={<>loading...</>}>
			<div className='min-w-screen min-h-screen flex flex-col bg-stone-900 text-sky-400'>
				<Header />
				<main className='container flex-grow mx-auto pt-24'>
					<Routes>
						<Route path='/' element={<Counter />} />
						<Route path='/counter' element={<Counter />} />
						<Route path='/timer' element={<Timer />} />
						<Route path='/posts' element={<Posts />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Suspense>
	)
}
export default App
