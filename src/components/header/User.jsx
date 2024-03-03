import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { RiImageAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const User = () => {
  const [user, setUser] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(false);
  };

  const handleLogout = () => {
    setUser(false);
    alert("Logged out");
    
  };

  const handleLogin = () => {
    setUser(true);
    alert("Logged in");
  };

  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://icons.veryicon.com/png/o/miscellaneous/hippo-design-official-icon-library/user-filling.png' alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src='https://icons.veryicon.com/png/o/miscellaneous/hippo-design-official-icon-library/user-filling.png' alt='' />
                    </div>
                    <div className='text'>
                      <h4>User</h4>
                      <label>Coimbatore, TN</label>
                    </div>
                  </div>
                </Link>
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box' onClick={handleLogout}>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to='/login'>
            <button onClick={handleLogin}>My Account</button>
          </Link>
        )}
      </div>
    </>
  );
};
