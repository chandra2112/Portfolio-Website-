import "./NavbarStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import{FaBars,FaTimes} from "react-icons/fa"
import { useState } from "react"


const NavBar = () => {
    const[click, setclick]=useState(false);
    const handleclick=()=> setclick(!click)
  return (
    <div className="header"> 
        <Link to ="/">
          <h1>Protfolio</h1>  
        </Link>
        <ul className={click? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
                
            </li>
            <li>
                <Link to="/project">Project</Link>
                
            </li>
            <li>
                <Link to="/about">About</Link>
                
            </li>
            <li>
                <Link to="/contact">Contact</Link>
                
            </li>
        </ul>
        <div className="humburger" onClick={handleclick}>
            {click ? (<FaTimes size={20} style={{color:'#fff'}}/>):( <FaBars size={20} style={{color:'#fff'}}/>)}
            
           

        </div>
    </div>
  )
}

export default NavBar