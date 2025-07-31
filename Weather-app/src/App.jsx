import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWther';
import ForecastDisplay from './components/ForecastDisplay';
import { extractDailyForecast } from './utils/weatherUtils'; // Import helper
import appStyles from './styles/App.module.css'; // Import app-wide styles

const OPENWEATHER_API_KEY = '1915945dc80da7bbb9cea8d19065308e'; // <<< REPLACE WITH YOUR ACTUAL KEY

function App() {
  const [city, setCity] = useState('London'); // Default city
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return; // Don't fetch if city is empty

    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null); // Clear previous errors

      try {
        // --- Fetch Current Weather ---
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;
        const currentResponse = await fetch(currentWeatherUrl);
        if (!currentResponse.ok) {
          // Handle specific API errors
          if (currentResponse.status === 404) {
            throw new Error('City not found. Please check the spelling.');
          } else if (currentResponse.status === 401) {
            throw new Error('Invalid API Key. Please check your OpenWeatherMap API key.');
          } else {
            throw new Error(`Failed to fetch current weather: ${currentResponse.statusText}`);
          }
        }
        const currentData = await currentResponse.json();
        setCurrentWeather(currentData);

        // --- Fetch 5-day Forecast ---
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) {
           if (forecastResponse.status === 404) {
            throw new Error('City not found for forecast. Please check the spelling.');
          } else if (forecastResponse.status === 401) {
            throw new Error('Invalid API Key for forecast.');
          } else {
            throw new Error(`Failed to fetch forecast: ${forecastResponse.statusText}`);
          }
        }
        const forecastData = await forecastResponse.json();
        const dailyForecast = extractDailyForecast(forecastData.list); // Use utility to process forecast
        setforecast(dailyForecast);

      } catch (err) {
        setError(err.message);
        setCurrentWeather(null); // Clear previous weather data on error
        setforecast([]); // Clear previous forecast on error
        console.error("Weather data fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]); // Re-run effect whenever 'city' state changes

  const handleSearch = (searchedCity) => {
    setCity(searchedCity); // Update city state, which triggers useEffect
  };

  return (
    <div className={appStyles.weatherDashboard}>
      <h1 className={appStyles.header}>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <div className={appStyles.loading}>Loading weather data...</div>}
      {error && <div className={appStyles.error}>Error: {error}</div>}

      {!loading && !error && currentWeather && (
        <CurrentWeather data={currentWeather} />
      )}
      {!loading && !error && forecast.length > 0 && (
        <ForecastDisplay forecastData={forecast} />
      )}

      {/* Optional: Message if no city searched yet or no data */}
      {!loading && !error && !currentWeather && !city && (
        <div style={{ textAlign: 'center', padding: '50px', color: '#666' }}>
          <p>Enter a city to get weather information.</p>
        </div>
      )}
    </div>
  );
}

export default App;