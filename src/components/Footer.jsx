import React, { useContext } from 'react';
import styles from './styles/Footer.module.css';
import { ViewContext } from '../context/ViewContextProvider';

const Footer = () => {
    const { handleView } = useContext(ViewContext);

    return (
        <footer className={styles.container}>
            <h2>WEATHERAPP</h2>
            <ul>
                <li onClick={() => handleView('home')}>Home</li>
                <li>
                    <a href="mailto:amansingh9723chauhan@gmail.com">
                        Contact us
                    </a>
                </li>
                <li onClick={() => handleView('cities')}>Cities</li>
                <li>FAQs</li>
                <li onClick={() => handleView('news')}>News</li>
            </ul>
        </footer>
    );
};

export default Footer;
