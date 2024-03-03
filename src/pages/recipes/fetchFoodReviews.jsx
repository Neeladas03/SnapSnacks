// Utility function or within your component
const fetchFoodReviews = async () => {
    const axios = require('axios');
  
    const options = {
      method: 'GET',
      url: 'https://foodiefetch.p.rapidapi.com/swiggy',
      params: {
        query: 'grandamas cafe pune'
      },
      headers: {
        'X-RapidAPI-Key': '15455ec179mshfc08543460dfeadp116187jsn3fcb53a16d54',
        'X-RapidAPI-Host': 'foodiefetch.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      // Handle the data, you might want to set it in the state or use it accordingly
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  