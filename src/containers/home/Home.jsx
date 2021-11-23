import React, { useEffect } from 'react';
import { useMyArt } from '../../state/UserProvider';
import ArtItem from './ArtItem';
import styles from '../containers.css';

import { AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import { useDrop } from 'react-dnd';
import { itemTypes } from '../../utils/itemTypes';
// import AddIcon from '@mui/icons-material/Add';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
    const { myArt, setMyArt } = useMyArt();

    const filter = (num) => {
        const filteredList = myArt.filter((art) => {
            console.log('item number: ', num);
            if (art.id > num || art.id < num) return art;
        });
        setMyArt(filteredList);
        return filteredList;
    };

    const [{ isOver }, drop] = useDrop({
        accept: itemTypes.CARD,
        drop: (item, monitor) => filter(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <main className={styles.home}>
            <img
                src="./logo-horizontal.png"
                alt="Fingerpaint"
                className={styles.homeLogo}
            />
            <section className={styles.artDisplay}>
                {myArt.map((art) => {
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
                        href="canvas"
                    >
                        <img src="./new.png" alt="NEW" className={styles.new} />
                    </Button>
                    <Button
                        variant="text"
                        style={{
                            margin: '0 1rem .5rem',
                            // color: isOver ? 'red' : 'blue',
                        }}
                        ref={drop}
                    >
                        <img src="./trash.png" alt="DELETE" />
                    </Button>
                </Toolbar>
            </AppBar>
        </main>
    );
}
