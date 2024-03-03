import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./account.css";

export const Account = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const history = useHistory();

  const handleUpdate = () => {
    setSuccessMessage("Profile Updated.");
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };



  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='left'>
              <label htmlFor='fileInput' className='profile-picture'>
                <div className='img flexCenter'>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCGiEs809ScQy_YLYLjEiGWFMq3ba9QDkiWMePOfLUxiqkTU35--AiS0yMFE-Y7SRMAk&usqp=CAU"
                      alt='preview'
                      className='image-preview'
                    />
                   : (
                    <div className='default-profile'>Profile</div>
                  )
                </div>
              </label>
            </div>
            <div className='right'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' />
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
              <button className='button' onClick={handleUpdate}>
                Update
              </button>
              {successMessage && <p className="success" style={{color:"green",marginTop:"10px"}}>{successMessage}</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
