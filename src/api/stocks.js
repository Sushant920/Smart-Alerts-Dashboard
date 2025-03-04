const API_KEY = 'D6P7L8BS0Y2LFSAH'; 

export async function fetchStockData(symbol) {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch stock data');
    }
    const data = await response.json();
    const timeSeries = data['Time Series (Daily)'];
    const latestDate = Object.keys(timeSeries)[0];
    const latestData = timeSeries[latestDate];
    return {
      symbol: symbol.toUpperCase(),
      date: latestDate,
      open: latestData['1. open'],
      high: latestData['2. high'],
      low: latestData['3. low'],
      close: latestData['4. close'],
      volume: latestData['5. volume'],
    };
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
}