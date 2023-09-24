import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  )
}

export default MainRoutes