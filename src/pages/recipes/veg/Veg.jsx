import React from 'react';
import {Route } from 'react-router-dom'; // Import Route from react-router-dom
import Idly from './idly/Idly';

const Veg = () => {
  return (
    <div>
      <h2 style={{fontFamily:"century gothic",fontWeight:"bold",fontSize:"40px"}}>Veg Recipes</h2>
      
      <Route path="/recipes/veg" component={Idly} /> 
    </div>
  );
};

export default Veg;
