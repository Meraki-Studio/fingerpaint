import React, { useRef } from 'react';
import CanvasDraw from '../../utils/eraser/index';
import {
  useCanvasOptions,
  useColor,
  useErase,
  usePanZoom,
} from '../../state/UserProvider';

import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Colors from './Colors';

import Container from '@mui/material/Container';

const Canvas = () => {
  const { canvasOptions, setCanvasOptions } = useCanvasOptions();
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

  const canvas = useRef();
  const canvasRef = canvas.current;

  const clearCanvas = () => {
    canvasRef.eraseAll();
  };

  const saveCanvas = () => {
    localStorage.setItem('savedCanvas', canvasRef.getSaveData());
  };

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
        ref={canvasRef}
        {...canvasOptions}
        canvasHeight={window.screen.height}
        canvasWidth={window.screen.width}
        enablePanAndZoom={panZoom}
        brushColor={color}
        erase={erase}
        hideGrid="true"
      />
      <Colors />
      <BottomBar />
    </Container>
  );
};

export default Canvas;
