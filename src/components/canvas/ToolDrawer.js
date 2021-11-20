import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const drawerWidth = 20;

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
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openDrawer(theme),
        '& .MuiDrawer-paper': openDrawer(theme),
    }),
    ...(!open && {
        ...closeDrawer(theme),
        '& .MuiDrawer-paper': closeDrawer(theme),
    }),
}));

const ToolDrawer = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = (open) => {
        setOpen(!open);
    };

    const viewNav = [
        'search-plus',
        'search-minus',
        'hand-paper',
        'eye',
        'eye-slash',
        'icons',
    ];
    const tools = [
        'paint-brush',
        'pen',
        'eraser',
        'fill-drip',
        'font',
        'stamp',
        'image',
        'palette',
    ];
    const manipulation = ['edit', 'undo', 'redo', 'save', 'trash-alt', 'crop'];

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" open={open}>
                <IconButton
                    sx={{ justifySelf: 'flex-end' }}
                    onClick={() => handleDrawer(open)}
                >
                    {open ? (
                        <FontAwesomeIcon icon="angle-left" />
                    ) : (
                        <FontAwesomeIcon icon="angle-right" />
                    )}
                </IconButton>
                <ButtonGroup
                    variant="text"
                    color="primary"
                    aria-label="draw tools group"
                    orientation="vertical"
                >
                    {tools.map((tool) => (
                        <FontAwesomeIcon key={tool} icon={tool} />
                    ))}
                </ButtonGroup>
            </Drawer>
        </Box>
    );
};

export default ToolDrawer;
