import { useEffect, useState } from "react";
import { fetchCryptoPrices } from "../api/crypto";

export default function Crypto() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    async function loadCrypto() {
      const data = await fetchCryptoPrices();
      setCryptoData(data);
    }
    loadCrypto();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">💰 Cryptocurrency Prices</h2>
      {cryptoData.length > 0 ? (
        <div className="grid gap-4">
          {cryptoData.map((crypto, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold">{crypto.name} ({crypto.symbol})</p>
              <p className="text-xl">{crypto.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading crypto prices...</p>
      )}
    </div>
  );
}
