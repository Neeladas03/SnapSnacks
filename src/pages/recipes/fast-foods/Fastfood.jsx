import React from 'react';
import {Route } from 'react-router-dom'; 
import Panipuri from './panipuri/Panipuri';


const Fastfood= () => {
  return (
    <div>
      <h2 style={{fontFamily:"century gothic",fontWeight:"bold",fontSize:"40px"}}>Fast-food Recipes</h2>
      
      <Route path="/recipes/fast-foods" component={Panipuri} /> 
    </div>
  );
};

export default Fastfood;
