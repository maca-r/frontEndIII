import React from 'react'
import "../App.css"
import { useLanguagesStates } from '../Context'


const Navbar = () => {
    /* DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
    COnsejo: Descomentar este bloque de código, cuando "App.jsx" ya tenga un proveedor
    const { language, handleChangeLA } = useContext(LanguageContext)
    const {text} = language
    
    */

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