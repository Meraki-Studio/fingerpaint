import React from 'react';
import { itemTypes } from '../../utils/itemTypes';
import { useDrag } from 'react-dnd';
import styles from '../containers.css';

export default function ArtItem({ art }) {
    const [{ isDragging }, drag] = useDrag({
        type: itemTypes.CARD,
        item: {
            id: art.id,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    return (
        <label className={styles.artContainer} ref={drag}>
            <img src={art.img} alt="fingerpainting" className={styles.art} />
        </label>
    );
}
