import React, { useContext } from 'react';
import NewsCard from './NewsCard';
import styles from './styles/News.module.css';
import { ViewContext } from '../context/ViewContextProvider';
import useFadeUp from '../hooks/useFadeUp';

const News = () => {
    const ref = useFadeUp();
    const { newsRef } = useContext(ViewContext);

    return (
        <div className={styles.container} ref={newsRef}>
            <h1>News</h1>
            <div ref={ref}>
                {' '}
                <NewsCard news={'Thunderstorm  in Mumbai'} />
                <NewsCard news={'Thunderstorm  in Mumbai'} />
                <NewsCard news={'Thunderstorm  in Mumbai'} />
            </div>
        </div>
    );
};

export default News;
