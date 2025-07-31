import React from 'react';
import ForecastCard from './ForecastCard';
import styles from '../styles/ForecastDisplay.module.css';

function ForecastDisplay({ forecastData }) {
  if (!forecastData || forecastData.length === 0) return null;

  return (
    <div className={styles.forecastSection}>
      <h2 className={styles.forecastTitle}>5-Day Forecast</h2>
      <div className={styles.forecastGrid}>
        {forecastData.map((day, index) => (
          <ForecastCard key={index} data={day} />
        ))}
      </div>
    </div>
  );
}

export default ForecastDisplay;