import React, {useState} from 'react';
import styles from '../styles/SearchBar.module.css';

function SearchBar({onSearch}) {
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (city.trim()) {
            onSearch(city.trim());
            setCity('');
        }else{
            alert("Please enter city name.");
        }
    };
    return(
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <input type="text"
            className={styles.cityInput}
            placeholder ="Enter the city name.."
            value={city}
            onChange={(e)=> setCity(e.target.value)}
            role="City name"
            />
            <button type="submit" className={styles.searchButton}>Search</button>
        </form>
    );
}

export default SearchBar;