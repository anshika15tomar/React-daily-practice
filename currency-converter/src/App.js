import React, { useState, useEffect } from 'react';
import CurrencySelect from './CurrencySelect';
import AmountInput from './AmountInput';
import ConversionResult from './ConversionResult';
import './App.css'

function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1);//input mai 1 dikhao 
  const [conversionRate, setConversionRate] = useState(1);

 
  useEffect(() => {
    
    if (fromCurrency === 'USD' && toCurrency === 'INR') {
      setConversionRate(75); 
    } else if (fromCurrency === 'INR' && toCurrency === 'USD') {
      setConversionRate(0.013);
    }
  }, [fromCurrency, toCurrency]);

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencySelect 
        fromCurrency={fromCurrency} 
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency} 
        setToCurrency={setToCurrency}
      />
      <AmountInput 
        amount={amount} 
        setAmount={setAmount} 
      />
      <ConversionResult 
        amount={amount} 
        conversionRate={conversionRate} 
        fromCurrency={fromCurrency} 
        toCurrency={toCurrency}
      />
    </div>
  );
}

export default App;
