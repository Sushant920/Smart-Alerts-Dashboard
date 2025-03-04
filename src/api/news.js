const API_KEY = 'Your_API_Key';

export async function fetchNewsData(query = 'latest', language = 'en') {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${encodeURIComponent(query)}&language=${language}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch news data');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching news data:', error);
    return [];
  }
}