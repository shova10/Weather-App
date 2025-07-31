import React from 'react';
import { getWeatherIConUrl } from '../utils/weatherUtils';

function WeatherIcon({iconCode, altText}){
    if(!iconCode) return null;
    const iconUrl = getWeatherIConUrl(iconCode);
    return(
        <img src={iconUrl}
        alt={altText || "Weather icon"}
        />
    )
}
export default WeatherIcon;
