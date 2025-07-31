import React from 'react';
import WeatherIcon from './WeatherIcon';
import styles from '../styles/CurrentWeather.module.css';

function CurrentWeather({data}) {
    if(!data) return null;

    const {name, main, weather, humidity, wind} = data;
    const temperature = main?.temp?.toFixed(1);
    const condition = weather?.[0]?.description;
    const iconCode = weather?.[0]?.icon;
    const windSpeed = wind?.speed?.toFixed(1);
    
    return (
        <div className={styles.currentWeathercard}>
            <h2 className={styles.cityName}>{name}</h2>
            <WeatherIcon iconCode={iconCode} altText={condition} />
            <p className={styles.temperature}>{temperature}</p>
            <p className={styles.condition}>{condition}</p>
            

             <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <span>Humidity:</span>
          <span className={styles.detailValue}>{humidity}%</span>
        </div>
        <div className={styles.detailItem}>
          <span>Wind Speed:</span>
          <span className={styles.detailValue}>{windSpeed} m/s</span>
        </div>
        </div>
        </div>
    );
}
export default CurrentWeather;