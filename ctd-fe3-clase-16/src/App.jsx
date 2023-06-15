import { Route, Routes } from "react-router-dom"
import { routes } from "./utils/routes"
import Home from "./Home"
import Contacto from "./Contacto"
import Beer from "./Beer"
import Navbar from "./components/Navbar"
import NotFound from "./NotFound"
import Layout from "./components/Layout"

function App() {
  return (
    <>
      
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.contact} element={<Contacto/>}/>
          <Route path={routes.beer} element={<Beer/>}/>
          <Route path={routes.notFound} element={<NotFound/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
