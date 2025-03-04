import { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weather';
import { WiCloud, WiThermometer, WiStrongWind } from 'react-icons/wi';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const city = 'Mumbai';

  useEffect(() => {
    async function loadWeather() {
      const data = await fetchWeather(city);
      setWeather(data);
    }
    loadWeather();
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <WiCloud className="text-blue-400 text-3xl mr-2" />
        {city} Weather
      </h2>

      {weather ? (
        <div className="space-y-3">
          <p className="flex items-center"><WiThermometer className="text-red-400 text-xl mr-2" /> Temperature: {weather.temp}°C</p>
          <p className="flex items-center"><WiStrongWind className="text-green-400 text-xl mr-2" /> Wind Speed: {weather.windSpeed} km/h</p>
          <p>Condition: {weather.condition}</p>
        </div>
      ) : (
        <p className="text-gray-400">Loading weather data...</p>
      )}
    </div>
  );
}
