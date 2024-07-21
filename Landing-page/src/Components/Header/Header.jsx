import React from 'react'
import {NavLink} from 'react-router-dom'


function Header() {
  return (
   <>
    <div>
        <nav className=" flex justify-between items-center ">
            <div className="" >
            <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <ul className="flex gap-9 text-xl ">
                <li>
                    <NavLink
                    to="/"
                    className = {({isActive})=>` ${isActive ? "text-gray-600 hover:underline":""} ` }
                    >
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                     className = {({isActive})=>` hover:underline ${isActive ? "text-gray-600 ":""} ` }>
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink to= "/contact"
                     className = {({isActive})=>` hover:underline ${isActive ? "text-gray-600 ":""} ` }>
                    Contact Us
                    </NavLink>
                </li>
            </ul>

            <button className="p-2 m-2 text-xl rounded-lg bg-red-700">Sign Up</button>
        </nav>
    </div>
   </>
  )
}

export default Header