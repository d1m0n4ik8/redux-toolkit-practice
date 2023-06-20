import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header className="container fixed border-b border-sky-400 h-16 flex justify-between items-center px-32">
         <Link className="text-2xl hover:text-sky-400" to="/">
            Logo
         </Link>
         <nav className="space-x-8 text-xl">
            <Link className="hover:text-sky-600" to="counter">
               Counter
            </Link>
            <Link className="hover:text-sky-600" to="timer">
               Timer
            </Link>
         </nav>
      </header>
   )
}
export default Header
