import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

export const Register = () => {
  
  const [successMessage, setSuccessMessage] = useState(null);
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    const newErrors = {};
  
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
  
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSuccessMessage("Registration successful! Please login.");
    setErrors({});
    setTimeout(() => {
      history.push("/login");
    }, 2000);
  };
  

  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_640.jpg" alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form>
          
            <div>
              <span>Email address *</span>
              <input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <span>Username *</span>
              <input
                type='text'
                name='username'
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
              <span>Password *</span>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
              <span>Confirm Password *</span>
              <input
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            <button type='button' className='button' onClick={handleRegister}>
              Register
            </button>
            {successMessage && <p className="success" style={{color:"green",marginTop:"10px"}}>{successMessage}</p>}
          </form>
        </div>
      </section>
    </>
  );
};
