import { Suspense, lazy } from 'react'

import Footer from './Components/Footer'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/PageNotFound'

const Counter = lazy(() => import('./Components/Counter'))

const App = () => {
   return (
      <Suspense fallback={<>loading...</>}>
         <div className="w-screen h-screen flex flex-col ">
            <Header />
            <main className="container flex-grow mx-auto">
               <Routes>
                  <Route path="/" element={<Counter />} />
                  <Route path="/counter" element={<Counter />} />
                  <Route path="/*" element={<PageNotFound />} />
               </Routes>
            </main>
            <Footer />
         </div>
      </Suspense>
   )
}
export default App
