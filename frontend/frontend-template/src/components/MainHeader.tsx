import React from "react"
import { NavLink } from "react-router-dom"
import '../css/MainHeader.css'

export default function MainHeader() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div className="Navbar">
            <ul>
                <li><NavLink
                    to="/" className='towhite'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Captive Portal
                </NavLink></li>
                <li><NavLink
                    to="/login" className='towhite'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Admin Login
                </NavLink></li>
                <li><NavLink
                    to="/register" className='towhite'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Admin Registration
                </NavLink></li>
                
                
                
            </ul>
        </div>
    )
}
