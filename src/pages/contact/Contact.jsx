import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px',
      fontFamily: "century gothic",
      backgroundColor: '#333', 
      color: '#fff', 
      maxWidth: '800px',
      margin: '20px auto', 
      borderRadius: "54px",
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Contact SnapSnacks</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0 10px' ,color: 'white',fontWeight:"bold"}}>
        Have a question, suggestion, or just want to say hello? We'd love to hear from you! Get in touch with us using the form below or reach out to us directly via email or social media.
      </p>
      <form style={{ margin: '20px auto', maxWidth: '600px', padding: '0 10px' }}onSubmit={handleFormSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ fontSize: '1.2rem', display: 'block', color: "black",fontWeight:"bold" }}>Name:</label>
          <input type="text" id="name" name="name" required style={{ width: '100%', padding: '10px', fontSize: '1rem',color:"black" }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ fontSize: '1.2rem', display: 'block', color: "black",fontWeight:"bold" }}>Email:</label>
          <input type="email" id="email" name="email" required style={{ width: '100%', padding: '10px', fontSize: '1rem',color:"black" }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="message" style={{ fontSize: '1.2rem', display: 'block', color: "black",fontWeight:"bold" }}>Message:</label>
          <textarea id="message" name="message" rows="4" required style={{ width: '100%', padding: '10px', fontSize: '1rem' ,color:"black"}}></textarea>
        </div>
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '16px 25px', fontSize: '1.2rem', border: 'none', borderRadius: '4px', cursor: 'pointer' ,position:"relative",top:"-10px"}}>Send Message</button>
      </form>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0 10px' ,color: 'white',fontWeight:"bold"}}>
        You can also reach us via email at <a href="mailto:contact@snapsnacks.com" style={{ color: 'lightblue',fontWeight:"bold"}}>contact@snapsnacks.com</a> or connect with us on social media:
      </p>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '10px 0' }}>
        <li style={{ marginBottom: '10px', fontSize: '1.2rem', lineHeight: '1.6',color: 'white',fontWeight:"bold" }}>Twitter: <a href="https://twitter.com/snapsnacks" style={{ color: 'lightblue',fontWeight:"bold" }}>@snapsnacks</a></li>
        <li style={{ marginBottom: '10px', fontSize: '1.2rem', lineHeight: '1.6',color: 'white',fontWeight:"bold" }}>Instagram: <a href="https://instagram.com/_snapsnacks_ " style={{ color: 'lightblue',fontWeight:"bold" }}>@snapsnacks</a></li>
        <li style={{ marginBottom: '10px', fontSize: '1.2rem', lineHeight: '1.6',color: 'white',fontWeight:"bold" }}>Facebook: <a href="https://facebook.com/snapsnacks" style={{ color: 'lightblue',fontWeight:"bold" }}>SnapSnacks</a></li>
      </ul>

      {showModal && (
        <div style={{ position: 'fixed', top: '0', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', zIndex: '1000' ,fontFamily:"century gothic", fontWeight:"bold",fontSize:"30px"  }}>
          <p>Thanks for your review!</p>
          <button style={{ 
            backgroundColor: '#4CAF50', 
            color: '#fff', 
            padding: '10px 15px', 
            fontSize: '1rem', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            position: "relative", 
            top: "10px",
          }} onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Contact;