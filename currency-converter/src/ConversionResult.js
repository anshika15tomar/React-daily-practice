import React from 'react';

function ConversionResult({ amount, conversionRate, fromCurrency, toCurrency }) {
  const convertedAmount = (amount * conversionRate).toFixed(2);

  return (
    <div>
      <h2>
        {amount} {fromCurrency} = {convertedAmount} {toCurrency}
      </h2>
    </div>
  );
}

export default ConversionResult;
