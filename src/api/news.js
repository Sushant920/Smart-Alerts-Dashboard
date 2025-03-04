const API_KEY = 'pub_730980bfb3ba7264a8bf4cd0f83f7f8346ffe';

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