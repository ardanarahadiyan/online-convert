import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [currency, setCurrency] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=1816a3e79f0043dd87d2d24272ff1045')
      let data  = await response.json()
      setCurrency(data)
      console.log("API Loaded")
    } catch {
      console.error("Loading API Error :")
    }
  }

  useEffect(() =>{
    fetchData()
  }, [])

  if (currency.rates === undefined){
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <table className='table'>
        <thead>
          <tr className='tblhead'>
            <td>Currency</td>
            <td>We Buy</td>
            <td>Exchange Rate</td>
            <td>We Sell</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CAD</td>
            <td>{parseFloat(currency.rates.CAD * 1.05).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.CAD).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.CAD * 0.95).toFixed(4)}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{parseFloat(currency.rates.EUR * 1.05).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.EUR).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.EUR * 0.95).toFixed(4)}</td>
          </tr>
          <tr>
            <td>IDR</td>
            <td>{parseFloat(currency.rates.IDR * 1.05).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.IDR).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.IDR * 0.95).toFixed(4)}</td>
          </tr>
          <tr>
            <td>JPY</td>
            <td>{parseFloat(currency.rates.JPY * 1.05).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.JPY).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.JPY * 0.95).toFixed(4)}</td>
          </tr>
          <tr>
            <td>CHF</td>
            <td>{parseFloat(currency.rates.CHF * 1.05).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.CHF).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.CHF * 0.95).toFixed(4)}</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>{parseFloat(currency.rates.GBP * 1.05).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.GBP).toFixed(4)}</td>
            <td>{parseFloat(currency.rates.GBP * 0.95).toFixed(4)}</td>
          </tr>        
          
        </tbody>

      </table>

      <p className='notes'>
        <p>Rates are based from 1 {currency.base}</p>
        <p>Data are collected from API <a className='App-link' href="https://currencyfreaks.com">currencyfreaks.com</a></p>
        <p>Updated by {currency.date}</p>
      </p>
    </div>
  );
}

export default App;
