import { useEffect, useState } from 'react';
import { fetchStockData } from '../api/stocks';

export default function Stocks() {
  const [stock, setStock] = useState(null);
  const [symbol, setSymbol] = useState('AAPL'); // Default stock symbol

  useEffect(() => {
    async function loadStock() {
      const data = await fetchStockData(symbol);
      setStock(data);
    }
    loadStock();
  }, [symbol]);

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value.toUpperCase());
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📈 Stock Information</h2>
      <input
        type="text"
        value={symbol}
        onChange={handleSymbolChange}
        placeholder="Enter stock symbol"
        className="mb-4 p-2 border rounded"
      />
      {stock ? (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold">
            {stock.symbol} - {stock.date}
          </p>
          <p>Open: ${stock.open}</p>
          <p>High: ${stock.high}</p>
          <p>Low: ${stock.low}</p>
          <p>Close: ${stock.close}</p>
          <p>Volume: {stock.volume}</p>
        </div>
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
}