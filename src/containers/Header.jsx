import React from 'react';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Drawer, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import styles from './containers.css';

export default function Header() {
    return (
        <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
            <Toolbar
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Button>
                    <MenuIcon />
                </Button>
                <TouchAppIcon />
                <Button>
                    <HomeIcon />
                </Button>
            </Toolbar>
        </AppBar>
    );
}
