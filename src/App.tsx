import { Suspense, lazy } from 'react'

import Footer from './Components/Footer'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/PageNotFound'
import Timer from './Components/Timer'
import Posts from './Components/Posts'

const Counter = lazy(() => import('./Components/Counter'))

const App = () => {
   return (
      <Suspense fallback={<>loading...</>}>
         <div className="min-w-screen min-h-screen flex flex-col bg-stone-900 text-sky-400">
            <Header />
            <main className="container flex-grow mx-auto pt-24">
               <Routes>
                  <Route path="/" element={<Counter />} />
                  <Route path="/counter" element={<Counter />} />
                  <Route path="/timer" element={<Timer />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="*" element={<PageNotFound />} />
               </Routes>
            </main>
            <Footer />
         </div>
      </Suspense>
   )
}
export default App
