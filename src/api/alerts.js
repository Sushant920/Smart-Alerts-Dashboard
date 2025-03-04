const API_KEY = 'Your_API_Key';

export async function fetchWeatherAlerts(lat = 19.07, lon = 72.87) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,daily&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather alerts');
      }
      const data = await response.json();
      return data.alerts || []; // OpenWeatherMap returns "alerts" key
    } catch (error) {
      console.error('Error fetching weather alerts:', error);
      return [];
    }
  }