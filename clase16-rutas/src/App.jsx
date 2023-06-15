
import { Outlet} from "react-router-dom"
import './App.css'
import Navbar from "./Navbar"
import Footer from "./Footer"

function App() {
  

  return (
    <div>
      {/* <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/faqs">Faqs</Link>

      </nav> */}
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>

      </div>
      
    </div>
  )
}

export default App
