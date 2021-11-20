import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import Container from '@mui/material/Container';
// import { BlockPicker } from 'react-color';

import { useCanvasOptions } from '../state/UserProvider';
import { AppBar, Toolbar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            icon: 'arrow-left',
            onClick: () => console.log('back'),
        },
        {
            icon: 'undo-alt',
            onClick: () => console.log('undo'),
        },
        {
            icon: 'redo-alt',
            onClick: () => console.log('redo'),
        },
        {
            icon: 'expand-arrows-alt',
            onClick: () => console.log('pan/zoom'),
        },
        {
            icon: 'eye',
            onClick: () => console.log('show/hide'),
        },
    ];

    const bottomTools = [
        {
            icon: 'palette',
            onClick: () => console.log('palette'),
        },
        {
            icon: 'paint-brush',
            onClick: () => console.log('brush'),
        },
        {
            icon: 'stamp',
            onClick: () => console.log('stamp'),
        },
        {
            icon: 'fill-drip',
            onClick: () => console.log('fill'),
        },
        {
            icon: 'image',
            onClick: () => console.log('image'),
        },
        {
            icon: 'eraser',
            onClick: () => console.log('eraser'),
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ margin: 0, padding: 0 }}>
            <AppBar
                position="absolute"
                color="primary"
                // style={{ position: 'absolute' }}
            >
                <Toolbar
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {topTools.map((tool) => {
                        return (
                            <FontAwesomeIcon
                                key={tool.icon}
                                icon={tool.icon}
                                onClick={tool.onClick}
                            />
                        );
                    })}
                </Toolbar>
            </AppBar>
            <CanvasDraw
                style={{ touchAction: 'none' }}
                ref={canvasRef}
                {...canvasOptions}
                canvasHeight={window.screen.height}
                canvasWidth={window.screen.width}
            />
            <AppBar
                position="absolute"
                color="primary"
                sx={{ top: 'auto', bottom: 0 }}
            >
                <Toolbar
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {bottomTools.map((tool) => {
                        return (
                            <FontAwesomeIcon
                                key={tool.icon}
                                icon={tool.icon}
                                onClick={tool.onClick}
                            />
                        );
                    })}
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Canvas;
