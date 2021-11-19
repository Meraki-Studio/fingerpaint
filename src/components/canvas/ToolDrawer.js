import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const drawerWidth = 80;

const openDrawer = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const closeDrawer = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
}));

const ToolDrawer = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = (open) => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => handleDrawer(open)}
                    edge="start"
                    sx={{
                        marginRight: 'auto',
                        ...(open && { display: 'none' }),
                    }}
                ></IconButton>
            </Toolbar>
            <MuiDrawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton>{}</IconButton>
                </DrawerHeader>
            </MuiDrawer>
        </Box>
    );
};

export default ToolDrawer;
