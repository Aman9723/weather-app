import React from 'react';
import styles from './styles/Home.module.css';
import Navbar from './Navbar';
import WeatherDetails from './WeatherDetails';
import WeatherMain from './WeatherMain';

const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <WeatherDetails
                    cloudy={'10%'}
                    humidity={'100%'}
                    wind={'100km/h'}
                />
                <WeatherMain temp={32} city={'Mumbai'} id={'01d'} />
            </div>
        </>
    );
};

export default Home;
