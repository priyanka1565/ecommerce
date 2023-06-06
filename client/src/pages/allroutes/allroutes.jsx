import React from 'react' 
import { Routes, Route } from "react-router-dom";
import Login from '../login/login';
import Product from '../products/product';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/products' element={<Product/> } />
    
    </Routes>
  );
}

export default AllRoutes;