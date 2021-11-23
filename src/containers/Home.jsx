import React, { useEffect } from 'react';
import { useMyArt } from '../state/UserProvider';
import ArtItem from './home/ArtItem';
import styles from './containers.css';

import { AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
    const { myArt } = useMyArt([
        'https://placekitten.com/96/140',
        'https://placekitten.com/96/139',
        'https://placekitten.com/200/287',
        'https://placekitten.com/96/140',
        'https://placekitten.com/96/139',
        'https://placekitten.com/200/287',
        'https://placekitten.com/96/140',
        'https://placekitten.com/96/139',
        'https://placekitten.com/200/287',
    ]);

    const samples = [
        {
            id: 1,
            img: 'https://placekitten.com/96/140',
        },
        {
            id: 2,
            img: 'https://placekitten.com/96/139',
        },
        {
            id: 3,
            img: 'https://placekitten.com/200/287',
        },
        {
            id: 4,
            img: 'https://placekitten.com/96/140',
        },
        {
            id: 5,
            img: 'https://placekitten.com/96/139',
        },
        {
            id: 6,
            img: 'https://placekitten.com/200/287',
        },
        {
            id: 7,
            img: 'https://placekitten.com/96/140',
        },
        {
            id: 8,
            img: 'https://placekitten.com/96/139',
        },
        {
            id: 9,
            img: 'https://placekitten.com/200/287',
        },
    ];

    return (
        <main className={styles.home}>
            <img
                src="./logo-horizontal.png"
                alt="Fingerpaint"
                className={styles.homeLogo}
            />
            <section className={styles.artDisplay}>
                {samples.map((art) => {
                    return (
                        <div key={art.id}>
                            <ArtItem art={art} />
                        </div>
                    );
                })}
            </section>
            <AppBar
                position="absolute"
                color="transparent"
                sx={{
                    top: 'auto',
                    bottom: 0,
                    boxShadow: 'none',
                    height: 'fitContent',
                }}
            >
                <Toolbar
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            margin: '0 3rem',
                        }}
                    />
                    <Button
                        variant="text"
                        style={{
                            margin: '0 1rem .5rem',
                        }}
                    >
                        <img src="./new.png" alt="NEW" className={styles.new} />
                    </Button>
                    <Button
                        variant="text"
                        style={{
                            margin: '0 1rem .5rem',
                        }}
                    >
                        <img src="./trash.png" alt="DELETE" />
                    </Button>
                </Toolbar>
            </AppBar>
        </main>
    );
}
