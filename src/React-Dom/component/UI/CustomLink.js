import React from 'react'
import { Link, useMatch } from 'react-router-dom'


const CustomLink = ({ children, to, ...props }) => {

    let match = useMatch({
        path: to,
        end: to.length === 1
    })

    return (
        <Link to={to}
            {...props}
            style={{ color: match ? 'red' : 'white' }}
        >
            {children}
        </Link>
    )
}

export default CustomLink