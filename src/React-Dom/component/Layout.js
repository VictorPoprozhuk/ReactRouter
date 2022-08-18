import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from './UI/CustomLink'
const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/" >Home</CustomLink>
                <CustomLink to="/blog" >Blog</CustomLink>
                <CustomLink to="/about" >About</CustomLink>
            </header>
            <div className="container">
                <Outlet />
            </div>
            <footer style={{ position: 'fixed', bottom: '40px' }}>2022</footer>
        </>
    )
}

export default Layout

//нав лінк дивиться яка сторінка активна і ставить ій клас active, якщо потрібно зробити кастомну назву класа робиться така умова

//  <NavLink to="/" className={() => isActive ? 'custom__class : '' }>Home</NavLink>

// або

// <NavLink to="/" style={{(isActive) => {color: isActive ? 'red' : 'white' }}}>Home</NavLink>