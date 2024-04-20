import Home from './pages/Home'
import React, { Profiler } from 'react'
import Layout from './components/Layout'
import { Routes , Route } from 'react-router-dom'
import Event from './pages/Event'
import EventSelectioner from './pages/EventSelectioner'
import Profile from './pages/Profile'

function Client() {
  return (
    <>
        <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/events" element={<Layout><Event /></Layout>}></Route>
      <Route path="/event-selectione/:id" element={<Layout><EventSelectioner /></Layout>}></Route>
      <Route path="/profile" element={<Layout><Profile /></Layout>}></Route>
    </Routes>
    </>
  )
}

export default Client