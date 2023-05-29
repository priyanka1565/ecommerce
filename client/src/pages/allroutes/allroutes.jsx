import React from 'react' 
import { Routes, Route } from "react-router-dom";
import Login from '../login/login';
const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Login/> } />
    </Routes>
  )
}

export default AllRoutes;