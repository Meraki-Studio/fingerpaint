import React from 'react';
import { useMyArt } from '../state/UserProvider';
import styles from './containers.css';

import ArtList from '../components/art/ArtList';
import Welcome from '../components/Welcome';
import Header from './Header';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
    const { myArt } = useMyArt();
    console.log(myArt);

    return (
        <main className={styles.home}>
            <Header />
            {myArt ? (
                <div className={styles.homeArtlist}>
                    <ArtList drawings={myArt} />
                    <Button href="canvas" variant="contained">
                        <AddIcon />
                    </Button>
                </div>
            ) : (
                <div className={styles.homeNoArtlist}>
                    <Welcome />
                    <Button href="canvas" variant="contained" size="large">
                        <AddIcon /> Create New Art
                    </Button>
                </div>
            )}
        </main>
    );
}
