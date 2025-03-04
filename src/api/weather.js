export async function fetchWeather() {
    try {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current_weather=true"
      );
      if (!res.ok) throw new Error("Failed to fetch weather data");
  
      const data = await res.json();
  
      return {
        location: "Mumbai",
        temperature: `${data.current_weather.temperature}°C`,
        windSpeed: `${data.current_weather.windspeed} km/h`,
        condition: getWeatherCondition(data.current_weather.weathercode),
      };
    } catch (error) {
      console.error("Error fetching weather:", error);
      return null;
    }
  }
  
  // Helper function to convert weather codes into readable conditions
  function getWeatherCondition(code) {
    const weatherConditions = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Rime fog",
      51: "Drizzle: Light",
      53: "Drizzle: Moderate",
      55: "Drizzle: Dense",
      61: "Rain: Slight",
      63: "Rain: Moderate",
      65: "Rain: Heavy",
      80: "Rain showers: Slight",
      81: "Rain showers: Moderate",
      82: "Rain showers: Heavy",
    };
    return weatherConditions[code] || "Unknown";
  }
  