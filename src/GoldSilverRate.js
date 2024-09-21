import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GoldSilverRate.css'; // Import CSS for cards

function GoldSilverRate() {
  const [goldPrice, setGoldPrice] = useState(null);
  const [silverPrice, setSilverPrice] = useState(null);
  const apiKey = 'goldapi-lohlsm1bws2cj-io';

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const goldResponse = await axios.get('https://www.goldapi.io/api/XAU/INR', {
          headers: {
            'x-access-token': apiKey,
            'Content-Type': 'application/json',
          },
        });
        setGoldPrice(goldResponse.data.price);
        
        const silverResponse = await axios.get('https://www.goldapi.io/api/XAG/INR', {
          headers: {
            'x-access-token': apiKey,
            'Content-Type': 'application/json',
          },
        });
        setSilverPrice(silverResponse.data.price);
      } catch (error) {
        console.error('Error fetching rates:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Fetch every minute
    return () => clearInterval(interval);
  }, [apiKey]);

  return (
    <div className="card-container">
      <div className="card gold-card">
        <img src="C:\Users\selva\gold-track\src\gold.jpg" alt="Gold" />
        <h2>Gold</h2>
        <p>{goldPrice ? `${goldPrice} INR` : 'Loading...'}</p>
        <button className="C:\Users\selva\gold-track\src\kaja.mp3">🔊 Play Gold Sound</button>
      </div>
      <div className="card silver-card">
        <img src="C:\Users\selva\gold-track\src\silver.jpg" alt="Silver" />
        <h2>Silver</h2>
        <p>{silverPrice ? `${silverPrice} INR` : 'Loading...'}</p>
        <button className="C:\Users\selva\gold-track\src\kaja.mp3">🔊 Play Silver Sound</button>
      </div>
    </div>
  );
}

export default GoldSilverRate;
