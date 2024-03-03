import React from 'react';

function Panipuri() {
  return (
    <div style={{ backgroundColor: 'MediumSeaGreen', padding: '20px', fontFamily: 'Century Gothic' }}>
      <center>
        <h1 style={{fontWeight:"bold",fontSize:"40px"}}>Pani puri</h1>
      </center>
      <div className="recipe" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <img
            src="https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=612x612&w=0&k=20&c=l6akiKMfTLE9nR4VonhiOZpZGDY4aEjimAN-BSskF-A="
            alt="Panipuri"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div style={{ textAlign: 'center',fontSize:"30px",fontWeight:"bold"  }}>
          <p>
          Pani Puri, also known as Golgappa or Puchka in different regions of India, is a popular street food snack. This iconic dish consists of small, round, hollow puris (crispy wheat shells) filled with a mixture of mashed potatoes, chickpeas, spices, and tangy tamarind water. The puris are typically served in a set, and each one is individually filled and consumed in one bite. Pani Puri offers a delightful explosion of flavors, combining the crunchiness of the puris, the spiciness of the filling, and the refreshing and tangy taste of the flavored water. It's a beloved and ubiquitous street food across India, enjoyed for its unique combination of textures and taste.</p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZQYzFFu7ZXg?si=QzOfpSpc7fDynb1J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Panipuri;
