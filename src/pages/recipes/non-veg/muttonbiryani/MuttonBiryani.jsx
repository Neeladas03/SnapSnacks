import React from 'react';

function MuttonBiriyani() {
  return (
    <div style={{ backgroundColor: 'MediumSeaGreen', padding: '20px', fontFamily: 'Century Gothic' }}>
      <center>
        <h1 style={{fontWeight:"bold",fontSize:"40px"}}>Mutton Biriyani</h1>
      </center>
      <div className="recipe" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <img
            src="https://paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230323_230721.jpg"
            alt="Mutton Biryani"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div style={{ textAlign: 'center',fontSize:"30px",fontWeight:"bold"  }}>
          <p>
            Mutton biryani is a classic Indian dish that is beloved for its flavorful and aromatic blend of spices, tender chicken, and fragrant rice. It is a celebratory dish often served at weddings, festivals, and other special occasions. To prepare chicken biryani, marinated chicken pieces are cooked with fragrant spices, onions, tomatoes, and yogurt to create a rich and flavorful base. This mixture is then layered with partially cooked basmati rice and slow-cooked in a sealed pot, allowing the flavors to meld together and the rice to absorb the delicious aromas. The key to a good chicken biryani is the blend of spices, which typically includes cumin, coriander, turmeric, and garam masala, among others. The use of saffron-infused milk or food coloring gives the rice its signature yellow-orange hue. Chicken biryani is often served with raita (a yogurt-based side dish), salad, and a side of spicy curry or gravy. It is a hearty and satisfying dish that is sure to delight anyone who loves Indian cuisine.
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/FVvUiMTYXJA?si=17s1OPVzlIDNQT5f"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MuttonBiriyani;
