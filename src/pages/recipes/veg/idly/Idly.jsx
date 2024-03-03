import React from 'react';

function Idly() {
  return (
    <div style={{ backgroundColor: 'MediumSeaGreen', padding: '20px' }}>
      <center>
        <h1 style={{fontWeight:"bold",fontSize:"40px"}}>IDLY</h1>
      </center>
      <div className="recipe" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px' }}>
          <img
            src="https://media.istockphoto.com/id/638506124/photo/idli-with-coconut-chutney-and-sambhar.jpg?s=612x612&w=0&k=20&c=ze1ngBM0LY4w9aqWx_tGe2vTAr4uf36elveTDZ83fgw="
            alt="Idly"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div style={{ textAlign: 'center' ,fontSize:"30px",fontWeight:"bold" }}>
          <p>
            Idli is a traditional South Indian dish that is popular throughout India and beyond. It is a savory rice cake
            made by steaming a fermented batter of rice and lentils. Idli is typically light, fluffy, and mildly tangy in
            flavor. It is a staple breakfast item in South India but is also enjoyed as a snack or light meal. Idli is
            known for its simplicity and health benefits. It is easy to digest, making it suitable for all ages,
            including infants and the elderly. The fermentation process involved in making idli enhances its nutritional
            value by increasing the bioavailability of nutrients and promoting the growth of beneficial bacteria. Idli is
            often served with sambar (a lentil-based vegetable stew) and coconut chutney. It can also be enjoyed with
            other accompaniments such as spicy chutneys or curry dishes. Idli is not only delicious but also nutritious,
            as it is low in calories and a good source of carbohydrates and protein.
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Nkahswh0kps?si=UaCBOHWagiEku3AG"
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

export default Idly;
