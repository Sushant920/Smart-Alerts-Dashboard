import { useEffect, useState } from 'react';
import { fetchNewsData } from '../api/news';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('latest');

  useEffect(() => {
    async function loadNews() {
      const data = await fetchNewsData(query);
      setArticles(data);
    }
    loadNews();
  }, [query]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📰 News</h2>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search news"
        className="mb-4 p-2 border rounded"
      />
      {articles.length > 0 ? (
        <div className="grid gap-4">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold">{article.title}</h3>
              </a>
              <p className="text-sm text-gray-600">{article.pubDate}</p>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading news articles...</p>
      )}
    </div>
  );
}