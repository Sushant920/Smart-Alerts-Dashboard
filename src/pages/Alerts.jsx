import { useEffect, useState } from 'react';
import { fetchWeatherAlerts } from '../api/alerts';

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [city, setCity] = useState('Mumbai');

  useEffect(() => {
    async function loadAlerts() {
      const data = await fetchWeatherAlerts(city);
      setAlerts(data);
    }
    loadAlerts();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">⚠️ Weather Alerts</h2>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
        className="mb-4 p-2 border rounded"
      />
      {alerts.length > 0 ? (
        <div className="grid gap-4">
          {alerts.map((alert, index) => (
            <div key={index} className="bg-red-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{alert.event}</h3>
              <p className="text-sm text-gray-600">{alert.start} - {alert.end}</p>
              <p>{alert.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No alerts available.</p>
      )}
    </div>
  );
}