import React from 'react';
import styles from './styles/WeatherDetails.module.css';

const WeatherDetails = ({ cloudy, humidity, wind }) => {
    return (
        <div className={styles.container}>
            <h2>Weather Details</h2>
            <div>
                <p>Cloudy</p>
                <p>{cloudy}</p>
            </div>
            <div>
                <p>Humidity</p>
                <p>{humidity}</p>
            </div>
            <div>
                <p>Wind</p>
                <p>{wind}</p>
            </div>
        </div>
    );
};

export default WeatherDetails;
