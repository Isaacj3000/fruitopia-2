import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">Fruitopia 🍓🍉🍒🍎🍑</div>
            <div className="navbar-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar