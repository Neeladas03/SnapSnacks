import React from 'react';

const About = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '100px',
      fontFamily: "century gothic",
      fontWeight: "bold",
    }}>
      <h1 style={{ fontFamily: '', fontSize: '2.5rem', color: "orange", marginBottom: '20px' }}>Welcome to SnapSnacks!</h1>

      <p style={{ fontFamily: 'century gothic', fontSize: '1.2rem', color: "black", lineHeight: '1.6', marginBottom: '20px' }}>
        Welcome to SnapSnacks, the culinary haven brought to life by the talented trio of Neeladhasan.m, Nithish Kumar.r, and Kissore raja.p! Nestled in the vibrant city of Coimbatore, our food blog is a celebration of South Indian flavors, with a special focus on the rich culinary tapestry of this region.
      </p>

      <p style={{ fontFamily: 'century gothic', fontSize: '1.2rem', color: "black", lineHeight: '1.6', marginBottom: '20px' }}>
        Whether you're an experienced chef or taking your first steps into the kitchen, SnapSnacks is your go-to destination for delectable recipes, insightful food photography tips, and a wealth of culinary inspiration. We take pride in showcasing the diverse and authentic tastes of South Indian cuisine, especially the unique and mouthwatering dishes that Coimbatore has to offer.
      </p>

      <p style={{ fontFamily: 'century gothic', fontSize: '1.2rem', color: "black", lineHeight: '1.6', marginBottom: '20px' }}>
        At SnapSnacks, we believe that food is a creative expression, a journey of exploration, and a means to build a community around shared culinary passions. Our mission is to empower home cooks to embrace their inner chef, allowing them to share their love for South Indian food with a global audience.
      </p>

      <p style={{ fontFamily: 'century gothic', fontSize: '1.2rem', color: "black", lineHeight: '1.6', marginBottom: '20px' }}>
        Embark on a gastronomic adventure with us as we delve into an array of flavors, cooking techniques, and cultural influences. From quick and easy weeknight dinners to indulgent desserts that satisfy every sweet tooth, our blog is designed to cater to the diverse tastes of our audience.
      </p>

      <p style={{ fontFamily: 'century gothic', fontSize: '1.2rem', color: "black", lineHeight: '1.6', marginBottom: '20px' }}>
        So, don your apron, sharpen your knives, and let the aromatic spices of South Indian cuisine transport you to a world of culinary delights. SnapSnacks is not just a food blog; it's a journey, a community, and an invitation to savor the essence of Coimbatore's gastronomic treasures.
      </p>

      {/* Add images below this line */}
      <div style={styles.memberContainer}>
        {/* Neeladhasan's Section */}
        <div style={styles.memberSection}>
          <img style={styles.memberImage} src="https://i.pinimg.com/236x/7b/12/d2/7b12d287221c0adf5b4efcdf326c178f.jpg" alt="Neeladhasan" />
          <p style={styles.memberName}>Neeladhasan.m</p>
        </div>

        {/* Nithish Kumar's Section */}
        <div style={styles.memberSection}>
          <img style={styles.memberImage} src="https://i.pinimg.com/236x/7b/12/d2/7b12d287221c0adf5b4efcdf326c178f.jpg" alt="Nithish Kumar" />
          <p style={styles.memberName}>Nithish Kumar.r</p>
        </div>

        {/* Kissore Raja's Section */}
        <div style={styles.memberSection}>
          <img style={styles.memberImage} src="https://i.pinimg.com/236x/7b/12/d2/7b12d287221c0adf5b4efcdf326c178f.jpg" alt="Kissore Raja" />
          <p style={styles.memberName}>Kisshore Raja.p</p>
        </div>
      </div>
      {/* End of image section */}

      {/* ... (rest of the content) ... */}
    </div>
  );
};

const styles = {
  memberContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  memberSection: {
    margin: '0 20px',
  },
  memberImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  memberName: {
    fontFamily: 'century gothic',
    fontSize: '1.2rem',
    color: 'black',
    lineHeight: '1.2',
  },
};

export default About;