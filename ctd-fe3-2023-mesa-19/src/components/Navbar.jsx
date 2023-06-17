import React from 'react'
import "../App.css"
import { useLanguagesStates } from '../Context'


const Navbar = () => {

    const {language, theme, handleChangeLA, handleChangeTheme} = useLanguagesStates()
    
    return (
        <div className="navbar">
            {/* CONSEJO: Renderizar la información traida del contexto de forma dinamica */}
            <p>{language.text.home}</p> 
            <p>Idioma actual: {language.id}</p>
            <button className='buttonLA' onClick={handleChangeLA}>{language.text.buttonL}</button>
            <button className={`toggle-button ${theme.background === "black" ? 'dark' : 'light'}`} onClick={handleChangeTheme}>{language.text.buttonT} </button>
            
        </div>
    )
}

export default Navbar