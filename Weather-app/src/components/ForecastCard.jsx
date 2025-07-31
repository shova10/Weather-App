import React from 'react';
import WeatherIcon from './WeatherIcon';
import {formatDate} from '../utils/weatherUtils';
import styles from '../styles/ForecastCard.module.css';

function ForecastCard({ data }) {
  if (!data) return null;

  const { date, temp_min, temp_max, weather, icon } = data;

  return (
    <div className={styles.forecastCard}>
      <p className={styles.forecastDate}>{formatDate(date)}</p>
      <WeatherIcon iconCode={icon} altText={weather} />
      <p className={styles.temps}>
        <span className={styles.highTemp}>{temp_max?.toFixed(1)}°C</span> / <span className={styles.lowTemp}>{temp_min?.toFixed(1)}°C</span>
      </p>
      <p className={styles.forecastCondition}>{weather}</p>
    </div>
  );
}
export default ForecastCard;