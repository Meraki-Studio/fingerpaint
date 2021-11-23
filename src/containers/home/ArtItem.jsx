import React from 'react';
import styles from '../containers.css';

export default function ArtItem({ art }) {
    return (
        <label className={styles.artContainer}>
            <img src={art.img} alt="fingerpainting" className={styles.art} />
        </label>
    );
}
