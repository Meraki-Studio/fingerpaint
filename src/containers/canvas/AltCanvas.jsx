import React, { useRef, useEffect } from 'react';
// import CanvasDraw from '../../utils/eraser/index';
import CanvasDraw from 'react-canvas-draw';

import {
  useCanvasOptions,
  useCanvasCommands,
  useColor,
  useErase,
  usePanZoom,
  usePalette,
  useMaxCanvas,
} from '../../state/UserProvider';

import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Colors from './Colors';

import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Back from './buttons/Back';
import Brush from './buttons/Brush';
import Eraser from './buttons/Eraser';
import Palette from './buttons/Palette';
import PanZoom from './buttons/PanZoom';
import ShowHide from './buttons/ShowHide';

const Canvas = () => {
  const { canvasCommands, setCanvasCommands } = useCanvasCommands();
  const { canvasOptions } = useCanvasOptions();
  const { color, setColor } = useColor();
  const { erase, setErase } = useErase();
  const { panZoom, setPanZoom } = usePanZoom();
  const { showPalette, setShowPalette } = usePalette();
  const { maxCanvas, setMaxCanvas } = useMaxCanvas();

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

  // Creates a reference to the canvas element
  const canvasDraw = useRef();
  console.log('This is canvas: ', canvasDraw);
  let canvasRef = null;
  console.log('This is initial canvasRef: ', canvasRef);

  // Creates the canvas reference
  useEffect(() => {
    canvasRef = canvasDraw.current;
    console.log('This is new canvasRef: ', canvasRef);
  }, [canvasDraw]);

  // Puts canvas reference into state for functions to use
  useEffect(() => {
    setCanvasCommands(canvasRef);
    console.log('Canvas Commands set to: ', canvasRef);
  }, [canvasRef]);

  // Functions for canvas buttons
  const paletteClick = () => {
    setShowPalette(!showPalette);
  };
  const brushClick = () => {
    setErase(false);
  };
  const eraseClick = () => {
    console.log('erase all activated');
    canvasCommands.eraseAll();
  };

  return (
    <Container maxWidth="lg" sx={{ margin: 0, padding: 0 }}>
      <TopBar />
      {/* <button onClick={() => clearCanvas()}>erase</button> */}
      <CanvasDraw
        style={{
          touchAction: 'none',
          position: 'relative',
          zIndex: 7,
          maxWidth: '100vw',
          maxHeight: '100vh',
        }}
        ref={canvasDraw}
        canvasHeight={window.screen.height}
        canvasWidth={window.screen.width}
        enablePanAndZoom={panZoom}
        brushColor={color}
        erase={erase}
        hideGrid={true}
      />
      <Colors />
      {/* {!panZoom && <BottomBar canvas={canvasDraw} />} */}
      {maxCanvas ? (
        <div
          style={{
            position: 'absolute',
            top: 'auto',
            bottom: 0,
            left: 0,
            zIndex: 8,
          }}
        >
          <Button onClick={paletteClick} sx={{ padding: '16px 16px 17.5px 0' }}>
            <Palette alt="palette" className="minimalIcon" color={color} />
          </Button>
        </div>
      ) : (
        <AppBar
          position="absolute"
          color="transparent"
          sx={{ top: 'auto', bottom: 0, zIndex: 8, padding: 0, margin: 0 }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              padding: 0,
            }}
          >
            <Button onClick={paletteClick} sx={{ padding: '16px 16px 16px 0' }}>
              <Palette alt="palette" className="minimalIcon" color={color} />
            </Button>
            <Button onClick={brushClick} sx={{ padding: '16px' }}>
              <Brush alt="brush" className="minimalIcon" color={color} />
            </Button>
            <Button onClick={() => eraseClick()} sx={{ padding: '16px' }}>
              <Eraser alt="eraser" className="minimalIcon" height="30px" />
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </Container>
  );
};

export default Canvas;
