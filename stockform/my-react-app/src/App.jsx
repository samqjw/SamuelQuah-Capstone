import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import stockImage from './assets/stock.png'

function checkStockCode(symbol){
  return 
      fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${IBM}&apikey=522AD1BIVKXNQS1B')
      .then(response => response.json())
      .then(data => {
      if (data["Time Series (Daily)"]) {
        // Valid symbol
        return { valid: true, data };
      } else {
        // Invalid symbol
        throw new Error("Invalid symbol");
      }
    });
}
  

// Wrote this section for the API validation but unsure how to call it to the input to check using useEffect...?

function App() {

  return (
    <>
      <div>
        <div className ='header-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
          <img src={stockImage} className="stockImage" alt="stock image" />
          <h1>Check Stock Prices</h1>
        </div>

        <form class="stock-form-fields">
          <input 
            type="stockCode" 
            value={checkStockCode} 
            placeholder="Select Stock" 
          />
          <input type="Quantity" placeholder="Quantity of Shares" />
          <input type="price" placeholder="Price per Share" />
          <button id="cta" type="submit">Check Price</button>
        </form>
      </div>
    </>
  )
}


export default App

