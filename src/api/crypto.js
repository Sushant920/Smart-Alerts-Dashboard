export async function fetchCryptoPrices() {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd");
      if (!res.ok) throw new Error("Failed to fetch crypto prices");
  
      const data = await res.json();
  
      return [
        { name: "Bitcoin", symbol: "BTC", price: `$${data.bitcoin.usd}` },
        { name: "Ethereum", symbol: "ETH", price: `$${data.ethereum.usd}` },
        { name: "Cardano", symbol: "ADA", price: `$${data.cardano.usd}` },
      ];
    } catch (error) {
      console.error("Error fetching crypto prices:", error);
      return [];
    }
  }
  