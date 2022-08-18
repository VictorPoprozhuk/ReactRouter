import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './app.css'

import Home from './component/Home'
import Blog from './component/Blog'
import About from './component/About'
import NotFoundPage from './component/NotFoundPage'
import { SinglePage } from './component/SinglePage'
import CreatePost from './component/UI/CreatePost'
import EditPost from './component/UI/EditPost'
import LoginPage from './component/LoginPage'

import Layout from './component/Layout'

import RequireAuth from './component/hoc/RequireAuth'
import { AuthProvider } from './component/AuthProvider'




const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<Navigate to='/about' replace />} />
          <Route path='about/*' element={<About />}>
            <Route path='contacts' element={<p>Our contacts</p>} />
            <Route path='team' element={<p>Our team</p>} />
            <Route path='information' element={<p>Our information</p>} />
          </Route>
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<SinglePage />} />
          <Route path='blog/:id/edit' element={<EditPost />} />
          <Route path='blog/new' element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          } />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>

    </AuthProvider>
  )
}

export default App