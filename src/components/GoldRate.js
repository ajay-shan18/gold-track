import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoldRate = () => {
  const [goldRate, setGoldRate] = useState(null);

  useEffect(() => {
    const fetchGoldRate = async () => {
      try {
        const response = await axios.get(`https://metals-api.com/api/latest?access_key=YOUR_API_KEY&symbols=XAU`);
        setGoldRate(response.data.rates.XAU);
      } catch (error) {
        console.error('Error fetching the gold rate:', error);
      }
    };

    fetchGoldRate();
  }, []);

  return (
    <div>
      <h2>Current Gold Rate: {goldRate ? `${goldRate} USD/ounce` : 'Loading...'}</h2>
    </div>
  );
};

export default GoldRate;
