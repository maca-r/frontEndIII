import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import LanguageContext from './Context';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <LanguageContext>
            <App />
        </LanguageContext>
        
    
    </BrowserRouter>
    
)