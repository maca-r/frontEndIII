import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/faqs">Faqs</Link>

            </nav> 
        </div>
    )
}

export default Navbar
