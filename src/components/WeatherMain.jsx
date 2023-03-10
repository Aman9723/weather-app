import React from 'react';
import styles from './styles/WeatherMain.module.css';

const WeatherMain = ({ temp, city, id }) => {
    return (
        <div className={styles.container}>
            <h1>
                {temp} <sup>°</sup>
            </h1>
            <div>
                <h2>{city}</h2>
                <p>06:45 Thursday 09/03/23</p>
            </div>
            <img
                src={process.env.REACT_APP_ICON_URL.replace('10d', id)}
                alt="icon"
            />
        </div>
    );
};

export default WeatherMain;
