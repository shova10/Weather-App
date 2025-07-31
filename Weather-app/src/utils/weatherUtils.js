export const formatDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleDateString('en-US', { month: 'short', weekday: 'short', day: 'numeric' });
};

export const getWeatherIConUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

export const extractDailyForecast = (foreCastList) => {
    const dailyData = {};

    foreCastList.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { month: 'short', weekday: 'short', day: 'numeric' });

        // Defensive check for weather array
        let weatherObj = { description: 'N/A', icon: '01d' };
        if (item.weather && Array.isArray(item.weather) && item.weather.length > 0) {
            weatherObj = item.weather[0];
        }

        if (!dailyData[day]) {
            dailyData[day] = {
                date: item.dt,
                temp_min: item.main?.temp_min ?? 0,
                temp_max: item.main?.temp_max ?? 0,
                weather: weatherObj.description,
                icon: weatherObj.icon
            };
        } else {
            dailyData[day].temp_min = Math.min(dailyData[day].temp_min, item.main?.temp_min ?? dailyData[day].temp_min);
            dailyData[day].temp_max = Math.max(dailyData[day].temp_max, item.main?.temp_max ?? dailyData[day].temp_max);
        }
    });

    const sortedDailyForecast = Object.values(dailyData)
        .sort((a, b) => a.date - b.date)
        .slice(1);

    return sortedDailyForecast.slice(0, 5);
}