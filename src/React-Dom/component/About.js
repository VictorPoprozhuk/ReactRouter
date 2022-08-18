import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <p>This is a demo website about React-router-dom library</p>
      <ul style={{ display: 'flex', gap: '20px', justifyContent: 'space-around', border: '2px solid gray', padding: '0' }}>
        <Link to='contacts'>Contacts</Link>
        <Link to='team'>Team</Link>
        <Link to='information'>Information</Link>
      </ul>
      <Outlet />
      {/* <Routes>
        <Route path='contacts' element={<p>Our contacts</p>} />
        <Route path='team' element={<p>Our team</p>} />
        <Route path='information' element={<p>Our information</p>} />
      </Routes> */}
    </div>
  )
}

export default About