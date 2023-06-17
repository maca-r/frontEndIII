import React, { useContext } from 'react'
import LanguageContext, { useLanguagesStates } from '../Context'

const Body = () => {
    
    /* CONSEJO: Utilizar useContext */
    const {language} = useLanguagesStates()
    
    return (
        <div>
            
            {/* CONSEJO: Utilizar los valores capturados desde el useContext */}
            <h1>{language.text.title}</h1>
            <p>{language.text.description}</p>
        </div>
    )
}

export default Body