import React from 'react';

function Jigarthanda() {
  return (
    <div style={{ backgroundColor: 'MediumSeaGreen', padding: '20px', fontFamily: 'Century Gothic' }}>
      <center>
        <h1 style={{fontWeight:"bold",fontSize:"40px"}}>Jigarthanda</h1>
      </center>
      <div className="recipe" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <img
            src="https://cookingfromheart.com/wp-content/uploads/2019/04/Jigarthanda-Prep-18.jpg"
            alt="Jigarthanda"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div style={{ textAlign: 'center',fontSize:"30px",fontWeight:"bold"  }}>
          <p>
          Jigarthanda is a popular South Indian drink that originated in the city of Madurai, Tamil Nadu, India. The name "Jigarthanda" literally translates to "cool heart" in Hindi. It is a refreshing beverage, particularly enjoyed during hot summer days. The drink is known for its unique combination of ingredients, including milk, almond gum (badam pisin), nannari syrup (sarsaparilla syrup), sugar, and ice cream. Jigarthanda has a sweet and creamy taste, making it a favorite among locals and tourists alike. It has gained popularity beyond its place of origin and is now savored in various parts of South India.          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/X6VCkClKx2Q?si=LxvFkvtqTCWW9SPV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Jigarthanda;
