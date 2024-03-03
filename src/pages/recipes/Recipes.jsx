import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = () => {
  
  return (
    <div>
      
      <div style={styles.staticQuote}>
        <p style={{ fontFamily: 'Century Gothic', fontWeight: 'bold', color: 'black', marginBottom: '20px', fontSize: '24px' }}>
          <span style={{ fontFamily: 'century gothic', fontStyle: 'italic', color: 'orange', fontSize: '34px' }}>"Savor the moment"</span> , one recipe at a time.
        </p>
      </div>

      <div style={styles.container}>
        <section style={styles.featured}>
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 ">
            <Link to="/recipes/veg">
              <div className="bg-black rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg recipeCard mr-4">
                <img className="w-full h-64 object-cover object-center" src="https://i.pinimg.com/236x/c6/3b/75/c63b759006dc829950725936a44dd941.jpg" alt="Vegetarian Recipe" />
                <h3 className="font-century-gothic text-lg font-bold text-white text-center p-4">VEG</h3>
              </div>
              </Link>
            </div>
      
      <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
      <Link to="/recipes/non-veg">
          <div className="bg-black rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg recipeCard mr-4">
            <img className="w-full h-64 object-cover object-center" src="https://i.pinimg.com/236x/41/61/57/416157a7068493fe859a9b4314320575.jpg" alt="Non-Vegetarian Recipe" />
            <h3 className="font-century-gothic text-lg font-bold text-white text-center p-4">NON-VEG</h3>
          </div>
          </Link>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
      <Link to="/recipes/drinks">
              <div className="bg-black rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg recipeCard mr-4">
                <img className="w-full h-64 object-cover object-center" src="https://i.pinimg.com/236x/0e/d9/89/0ed989a24da337bbd4ccaff3e7c4ac33.jpg" alt="Drinks Recipe" />
                <h3 className="font-century-gothic text-lg font-bold text-white text-center p-4">DRINKS</h3>
              </div>
              </Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <Link to="/recipes/fast-foods">
              <div className="bg-black rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
                <img className="w-full h-64 object-cover object-center" src="https://i.pinimg.com/236x/a6/d8/ce/a6d8ce151fdf6bacae9ce41ee10106ce.jpg" alt="Fast Foods Recipe" />
                <h3 className="font-century-gothic text-lg font-bold text-white text-center p-4">FAST FOODS</h3>
              </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
    container: {
      maxWidth: '600px', 
      margin: '0 auto',
      padding: '10px',
    },
    staticQuote: {
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    featured: {
      marginBottom: '20px',
    },
    recipeCard: {
      border: '1px solid #ddd',
      borderRadius: '15px',
      marginBottom: '10px',
      background: 'black',
    },
    recipeList: {
      display: 'flex',
      flexWrap: 'wrap', // Allow cards to wrap to the next line
      justifyContent: 'space-between', // Distribute space between cards
      marginBottom: '20px',
      color: 'orange',
      margin:"20px"
    },
    
  };

export default Recipes; 


