import React from 'react';
import styles from './styles/NewsCard.module.css';
import image from '../assets/thunderstorm.jpg';

const NewsCard = ({ news }) => {
    return (
        <div className={styles.container}>
            <img src={image} />
            <p>{news}</p>
            <button>Read more</button>
        </div>
    );
};

export default NewsCard;
