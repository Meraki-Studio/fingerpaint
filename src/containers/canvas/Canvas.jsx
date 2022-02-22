import React, { useRef, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';

import {
  useCanvasCommands,
  useColor,
  useErase,
  usePanZoom,
} from '../../state/UserProvider';

import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Colors from './Colors';

import Container from '@mui/material/Container';

const Canvas = () => {
  const { setCanvasCommands } = useCanvasCommands();
  const { color } = useColor();
  const { erase } = useErase();
  const { panZoom } = usePanZoom();

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
  let canvasRef = null;

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

  return (
    <Container maxWidth="lg" sx={{ margin: 0, padding: 0 }}>
      <TopBar />
      <CanvasDraw
        style={{
          touchAction: 'none',
          position: 'relative',
          zIndex: 7,
          maxWidth: '100vw',
          maxHeight: '100vh',
        }}
        ref={canvasDraw}
        lazyRadius={5}
        canvasHeight={window.screen.height}
        canvasWidth={window.screen.width}
        enablePanAndZoom={panZoom}
        brushColor={color}
        erase={erase}
        hideGrid={true}
      />
      <Colors />
      {!panZoom && <BottomBar canvas={canvasDraw} />}
    </Container>
  );
};

export default Canvas;
