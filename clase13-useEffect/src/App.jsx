import { useState } from 'react'

import './App.css'
import Componente from './Components/Componente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Componente/>
    </>
  )
}

export default App
