import React from 'react';
import {Route } from 'react-router-dom'; 
import MuttonBiriyani from './muttonbiryani/MuttonBiryani';


const Nonveg = () => {
  return (
    <div>
      <h2 style={{fontFamily:"century gothic",fontWeight:"bold",fontSize:"40px"}}>Non-Veg Recipes</h2>
      
      <Route path="/recipes/non-veg" component={MuttonBiriyani} /> 
    </div>
  );
};

export default Nonveg;
