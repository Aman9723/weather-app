import React from 'react';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <ul>
                <li>Home</li>
                <li>Cities</li>
                <li>News</li>
            </ul>
        </nav>
    );
};

export default Navbar;
