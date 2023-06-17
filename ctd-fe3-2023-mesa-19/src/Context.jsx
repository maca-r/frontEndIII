import { createContext, useContext, useState } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

const LanguageStates = createContext()


const LanguageContext = ({children}) => {

    const languages = {
        english: {
            id: "EN",
            text: EN
        },
        spanish: {
            id: "ES",
            text: ES
        },
        portuguese: {
            id: "PTBR",
            text: PTBR
        },
    }

    const themes = {
        light: {
            font: 'black',
            background: 'white'
        },
        dark: {
            font: 'white',
            background: 'black'
        }
    };
    
    const [language, setLanguage] = useState(languages.english)

    const [theme, setTheme] = useState(themes.light)
    
    const handleChangeLA = (event) => {
        event.preventDefault()

        if(language.id === languages.english.id) setLanguage(languages.spanish)
        
        if(language.id === languages.spanish.id) setLanguage(languages.portuguese)
        
        if(language.id === languages.portuguese.id) setLanguage(languages.english)
        
    }

    const handleChangeTheme = (event) => {
        event.preventDefault()
        
        if(theme.background === themes.dark.background) setTheme(themes.light)

        if(theme.background === themes.light.background) setTheme(themes.dark)
    }


    return(
        <LanguageStates.Provider value={{language, setLanguage, theme, setTheme, handleChangeLA, handleChangeTheme}}>
            {children}
        </LanguageStates.Provider>
    )
}

export default LanguageContext;

export const useLanguagesStates = () => useContext(LanguageStates)


// export const languages = {
//     english: {
//         id: "EN",
//         text: EN
//     },
//     /* SUGERENCIA: agregue los demás idiomas */
// };

// /* SUGERENCIA: Usa createContext e inicia el idioma inglês como predeterminado */
// const LanguageContext = "";

