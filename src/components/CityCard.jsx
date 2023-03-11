import React, { useContext, useEffect, useState } from 'react';
import styles from './styles/CityCard.module.css';
import axios from 'axios';
import { HelpContext } from '../context/HelpContextProvider';

const CityCard = ({ city }) => {
    const [data, setData] = useState(null);
    const { API, KEY, imagePath, kelvinToCelsius, date } =
        useContext(HelpContext);
    const [image, setImage] = useState('');

    useEffect(() => {
        axios
            .get(`${API}?q=${city}&appid=${KEY}`)
            .then((res) => {
                setData(res.data);
                console.log(
                    data?.weather[0].main.toLowerCase(),
                    city
                );
                setImage(
                    require(`../assets/${
                        imagePath[data?.weather[0].main.toLowerCase()]
                            ? data?.weather[0].main.toLowerCase()
                            : 'atmosphere'
                    }.jpg`)
                );
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.part1}>
                <img src={image} alt={city} />
                <p>{data?.weather[0].main}</p>
            </div>
            <div className={styles.part2}>
                <h1>
                    {kelvinToCelsius(data?.main.temp)} <sup>°</sup>
                </h1>
                <span>
                    <strong>{city}</strong>
                    <p>
                        {date.getMonth() + 1}/{date.getDate()}/
                        {date.getFullYear()}
                    </p>
                </span>
            </div>
        </div>
    );
};

export default CityCard;
