import React from 'react';
import {Route } from 'react-router-dom'; 
import Jigarthanda from './jigarthanda/Jigarthanda';


const Drinks= () => {
  return (
    <div>
      <h2 style={{fontFamily:"century gothic",fontWeight:"bold",fontSize:"40px"}}>Drinks</h2>
      
      <Route path="/recipes/drinks" component={Jigarthanda} /> 
    </div>
  );
};

export default Drinks;
