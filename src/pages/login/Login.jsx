import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { useState } from "react";


export const Login = () => {

  const [successMessage, setSuccessMessage] = useState(null);
  const history = useHistory();
  const handleLogin = () => {
    setSuccessMessage("Login Successful!.");
    setTimeout(() => {
      history.push("/");
    }, 2000);
    
  };

  return (
    <>
      <section className='login'>
        <div className='container' style={{ fontWeight: "bold" }}>
          <div className='backImg'>
            <img src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_640.jpg" alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form>
            <div>
              <span>Username or email address *</span>
              <input type='text' required />
            </div>
            <div>
              <span>Password *</span>
              <input type='password' required />
            </div>
            <button type='button' className='button' onClick={handleLogin}>
              Log in
            </button>
            <Link to="/register" className="reg">
              Register
            </Link>
            {successMessage && <p className="success" style={{color:"green",marginTop:"10px"}}>{successMessage}</p>}
          </form>
        </div>
      </section>
    </>
  );
};
