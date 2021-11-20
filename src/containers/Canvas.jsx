import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import Container from '@mui/material/Container';
// import { BlockPicker } from 'react-color';

import ToolDrawer from '../components/canvas/ToolDrawer';
import { useCanvasOptions } from '../state/UserProvider';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CanvasControlIcons } from '../utils/CanvasControlIcons';
import styles from './containers.css';

CanvasControlIcons();

const Canvas = () => {
    const { canvasOptions, setCanvasOptions } = useCanvasOptions();

    /**
     * @param {Object} canvasOptions
     * canvasOptions: {
            onChange: null
            loadTimeOffset: 5,
            lazyRadius: 30,
            brushRadius: 12,
            brushColor: "#444",
            catenaryColor: "#0a0302",
            gridColor: "rgba(150,150,150,0.17)",
            hideGrid: false,
            canvasWidth: window.,
            canvasHeight: 400,
            disabled: false,
            imgSrc: "",
            saveData: null,
            immediateLoading: false,
            hideInterface: false,
            gridSizeX: 25,
            gridSizeY: 25,
            gridLineWidth: 0.5,
            hideGridX: false,
            hideGridY: false
            enablePanAndZoom: false,
            mouseZoomFactor: 0.01,
            zoomExtents: { min: 0.33, max: 3 },
        };
     */
    // const handleChange = (name, value) => {
    //     setCanvasOptions((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };

    const canvas = useRef(null);
    const canvasRef = canvas.current;

    const clearCanvas = () => {
        canvasRef.eraseAll();
    };

    const saveCanvas = () => {
        localStorage.setItem('savedCanvas', canvasRef.getSaveData());
    };

    const topTools = [
        {
            id: 1,
            icon: 'faUndo',
            clickHandler: () => console.log('you clicked back arrow!'),
        },
        {
            id: 2,
            icon: 'faRedo',
            clickHandler: () => console.log('you clicked undo!'),
        },
    ];

    return (
        <Container maxWidth="lg">
            <AppBar>
                <Toolbar>
                    {topTools.map((tool) => {
                        return (
                            <FontAwesomeIcon
                                icon={tool.icon}
                                onClick={tool.clickHandler}
                            />
                        );
                    })}
                </Toolbar>
            </AppBar>
            <CanvasDraw
                style={{ touchAction: 'none' }}
                ref={canvasRef}
                {...canvasOptions}
                canvasHeight={window.screen.availHeight}
                canvasWidth={window.screen.availWidth}
            />
            <AppBar>
                <Toolbar></Toolbar>
            </AppBar>
        </Container>
    );
};

export default Canvas;
