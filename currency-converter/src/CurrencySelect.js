import React from 'react';

function CurrencySelect({ fromCurrency, setFromCurrency, toCurrency, setToCurrency }) {
  return (
    <div>
      <label className='fromcurrency'>From Currency: </label>
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
      </select>

      <label className='tocurrency'>To Currency: </label>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export default CurrencySelect;
