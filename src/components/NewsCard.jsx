import React, { useState, useEffect, useContext } from 'react';
import styles from './styles/NewsCard.module.css';
import axios from 'axios';
import { HelpContext } from '../context/HelpContextProvider';

const NewsCard = ({ city }) => {
    const [image, setImage] = useState('');
    const { FORECAST, KEY, imagePath } = useContext(HelpContext);
    const [desc, setDesc] = useState('');

    useEffect(() => {
        axios.get(`${FORECAST}?q=${city}&appid=${KEY}`).then((res) => {
            setDesc(res.data.list[20].weather[0].description);
            setImage(
                require(`../assets/${
                    imagePath[res.data.list[20].weather[0].main.toLowerCase()]
                        ? res.data.list[20].weather[0].main.toLowerCase()
                        : 'atmosphere'
                }.jpg`)
            );
        });
    }, []);

    return (
        <div className={styles.container}>
            <img src={image} />
            <p>
                {desc} in {city}
            </p>
            <button>Read more</button>
        </div>
    );
};

export default NewsCard;
