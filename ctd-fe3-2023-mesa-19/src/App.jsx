import './App.css'
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import Body from './components/Body';
import { useLanguagesStates } from './Context';

function App() {

  const {theme} = useLanguagesStates()
  

  return (
    <div className="App" style={{background: theme.background, color: theme.font}}>
      <>{/* SUGERENCIA: Agregue el Provider de LanguageContext */}
        <Navbar/>
        <Body/>
      </>
    </div>
  )
}

export default App