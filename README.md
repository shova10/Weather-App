# Weather Dashboard

A responsive and interactive React-based weather application that provides current weather conditions and a 5-day forecast for any city worldwide. Built using the OpenWeatherMap API, this dashboard offers a clean and intuitive user interface to quickly check weather information.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Current Weather Display**: Shows the current temperature, humidity, wind speed, and weather description for a searched city.
- **5-Day Weather Forecast**: Provides a daily forecast including high/low temperatures and weather conditions for the next five days.
- **City Search Functionality**: Users can search for weather information by entering any city name.
- **Responsive Design**: Adapts to different screen sizes for a seamless experience on various devices.
- **Error Handling**: Gracefully handles cases like city not found or API key issues.
- **Loading Indicator**: Displays a loading message while fetching data.

## Screenshots
<img width="772" height="590" alt="Screenshot 2025-07-31 175040" src="https://github.com/user-attachments/assets/d1bb3561-0d99-4eb5-968f-3c8385f61001" />
<img width="550" height="500" alt="Screenshot 2025-07-31 175056" src="https://github.com/user-attachments/assets/aa8ab354-8123-4bf7-9f5b-e87ae9933a52" />
<img width="577" height="568" alt="Screenshot 2025-07-31 175111" src="https://github.com/user-attachments/assets/ef1a7ffc-46e3-469d-9de6-58d1dbd3fcaf" />

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **OpenWeatherMap API**: Used to fetch current weather data and 5-day forecasts.
- **CSS Modules**: For scoped and modular styling.
- **JavaScript (ES6+)**
- **HTML5**


## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn


Install dependencies:
Bash

npm install
# OR
yarn instal


Obtain an OpenWeatherMap API Key:

    Go to the OpenWeatherMap website.

    Sign up for a free account.

    Once logged in, navigate to the "API keys" tab to find your key.


    
et up the API Key:

    In the src/App.js file, locate the line:
    JavaScript

const OPENWEATHER_API_KEY = '1915945dc80da7bbb9cea8d19065308e'; // <<< REPLACE WITH YOUR ACTUAL KEY

Replace '1915945dc80da7bbb9cea8d19065308e' with your actual OpenWeatherMap API key.

Note: For production environments, it's recommended to use environment variables (e.g., .env file with dotenv package) to store sensitive information like API keys, rather than hardcoding them directly in the source code. However, for this simple demonstration, direct replacement is sufficient.

Run the application:
Bash

npm start
# OR
yarn start

This will start the development server, and the application will open in your browser, usually at http://localhost:3000.


Usage

    Open the application in your web browser.

    In the search bar, type the name of the city you want to get weather information for (e.g., "London", "New York", "Butwal").

    Click the "Search" button or press Enter.

    The current weather and a 5-day forecast for the entered city will be displayed.

    
API Key

This project relies on the OpenWeatherMap API for weather data. You need to obtain a free API key from their website and configure it in the src/App.js file as described in the Setup and Installation section.


Project Structure

weather-dashboard/

├── public/

│   └── index.html


├── src/

│   ├── App.jsx             (Main component, handles API calls, state management)

│   ├── index.css           (Basic global styles)
│   │


├── components/

│   │   ├── SearchBar.jsx         (Input field and search button)

│   │   ├── CurrentWeather.jsx    (Displays current weather details)

│   │   ├── ForecastDisplay.jsx   (Container for 5-day forecast cards)

│   │   ├── ForecastCard.jsx      (Displays individual day's forecast)

│   │   └── WeatherIcon.jsx       (Helper to display weather icons)


│   │
│   ├── styles/                     (CSS Modules for each component)

│   │   ├── App.module.css

│   │   ├── SearchBar.module.css

│   │   ├── CurrentWeather.module.css

│   │   ├── ForecastDisplay.module.css

│   │   └── ForecastCard.module.css


│   │
│   └── utils/                      (Helper functions)

│       └── weatherUtils.js         (Date formatting, icon mapping)

│

└── ... (package.json, etc.)



License

This project is open-sourced under the MIT License. See the LICENSE file for more details.


Acknowledgments

    OpenWeatherMap for providing the weather API.

    Create React App for bootstrapping the project.


