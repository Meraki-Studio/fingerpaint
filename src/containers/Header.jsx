import React from 'react';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import styles from './containers.css';

export default function Header() {
    return (
        <div className={styles.Header}>
            <Button>
                <MenuIcon />
            </Button>
            <TouchAppIcon />
            <Button>
                <HomeIcon />
            </Button>
        </div>
    );
}
