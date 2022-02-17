import React, { useRef, useEffect } from 'react';
// import CanvasDraw from '../../utils/eraser/index';
import CanvasDraw from 'react-canvas-draw';

import {
  useCanvasOptions,
  useColor,
  useErase,
  usePanZoom,
  useSaveableCanvas,
} from '../../state/UserProvider';

import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Colors from './Colors';

import Container from '@mui/material/Container';

const Canvas = () => {
  const { saveableCanvas, setSaveableCanvas } = useSaveableCanvas();
  const { canvasOptions } = useCanvasOptions();
  const { color } = useColor();
  const { erase, setErase } = useErase();
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

  const canvasDraw = useRef();
  console.log('This is canvas: ', canvasDraw);
  const canvasRef = canvasDraw.current;
  console.log('This is canvasRef: ', canvasRef);

  const clearCanvas = () => {
    console.log('clearCanvas activated');
    canvasRef.eraseAll();
  };

  return (
    <Container maxWidth="lg" sx={{ margin: 0, padding: 0 }}>
      <TopBar />
      <button onClick={() => clearCanvas()}>erase</button>
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
      {!panZoom && <BottomBar />}
    </Container>
  );
};

export default Canvas;
