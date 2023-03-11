import React, { useContext } from 'react';
import CityCard from './CityCard';
import styles from './styles/Cities.module.css';
import earth from '../assets/earth.jpg';
import { ViewContext } from '../context/ViewContextProvider';
import useFadeUp from '../hooks/useFadeUp';

const Cities = () => {
    const { citiesRef } = useContext(ViewContext);
    const ref1 = useFadeUp();
    const ref2 = useFadeUp();
    const ref3 = useFadeUp();

    return (
        <div className={styles.container} ref={citiesRef}>
            <h1>Cities</h1>
            <div ref={ref1}>
                <CityCard city={'Delhi'} />
                <CityCard city={'Chennai'} />
                <CityCard city={'Jaipur'} />
            </div>
            <div className={styles.searchbar} ref={ref2}>
                <input type="text" placeholder="Search city" />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/800px-Vector_search_icon.svg.png"
                    alt="search icon"
                />
            </div>
            <div className={styles.earth} ref={ref3}>
                <img src={earth} alt="earth" />
            </div>
        </div>
    );
};

export default Cities;
