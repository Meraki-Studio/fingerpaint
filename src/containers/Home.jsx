import React from 'react';
import { useMyArt } from '../state/UserProvider';
import styles from './containers.css';

import ArtList from '../components/art/ArtList';
import Welcome from '../components/Welcome';

import { AppBar, Drawer, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
    const { myArt, setMyArt } = useMyArt();
    console.log(myArt);

    const samples = [
        'https://placekitten.com/96/140',
        'https://placekitten.com/96/139',
        'https://placekitten.com/200/287',
        'https://placekitten.com/96/140',
        'https://placekitten.com/96/139',
        'https://placekitten.com/200/287',
        'https://placekitten.com/96/140',
        'https://placekitten.com/96/139',
        'https://placekitten.com/200/287',
    ];

    useEffect(() => {
        setMyArt(samples);
    }, []);

    return (
        <main className={styles.home}>
            <img
                src="./logo-horizontal.png"
                alt="Fingerpaint"
                className={styles.homeLogo}
            />
            <section></section>
            <AppBar
                position="absolute"
                color="transparent"
                sx={{ top: 'auto', bottom: 0, boxShadow: 'none' }}
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
                            margin: '0 1rem',
                        }}
                    >
                        <img src="./new.png" alt="NEW" />
                    </Button>
                    <Button
                        variant="text"
                        style={{
                            margin: '1rem',
                        }}
                    >
                        <img src="./trash.png" alt="DELETE" />
                    </Button>
                </Toolbar>
            </AppBar>
        </main>
    );
}
