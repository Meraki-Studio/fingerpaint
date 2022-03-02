import React, { useRef, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';

import {
  useCanvasCommands,
  useColor,
  useErase,
  usePanZoom,
  useCurrentArt,
  useLoading,
  useAutoSaveActive,
} from '../../state/UserProvider';

import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Colors from './Colors';

import Container from '@mui/material/Container';

const Canvas = () => {
  const { canvasCommands, setCanvasCommands } = useCanvasCommands();
  const { color } = useColor();
  const { erase } = useErase();
  const { panZoom } = usePanZoom();
  const { currentArt } = useCurrentArt();
  const { loading, setLoading } = useLoading();
  const { autoSaveActive, setAutoSaveActive } = useAutoSaveActive();

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

  // console.log(currentArt);

  // Creates the canvas reference
  useEffect(() => {
    setLoading(true);
    canvasRef = canvasDraw.current;
    // console.log('canvas draw: ', canvasDraw, 'canvas ref: ', canvasRef);
    setCanvasCommands(canvasRef);
    // console.log('canvas commands: ', canvasCommands);
    setLoading(false);
  }, []);

  // autoSave() functionality
  const timeoutId = setTimeout(autoSave, 5000);

  function autoSave() {
    if (autoSaveActive) {
      console.log('auto save ', currentArt);
      localStorage.setItem(currentArt, canvasCommands.getSaveData());
      setAutoSaveActive(false);
    } else {
      console.log('auto save disabled');
    }
  }

  // console.log('this is the autosave function: ', autoSave);

  // target canvas on mouse down to trigger clearInterval(autoSave)
  const handleMouseDown = () => {
    console.log('mouse down, clearInterval');
    clearTimeout(timeoutId);
    setAutoSaveActive(false);
  };

  console.log('autoSaveActive 110: ', autoSaveActive);

  // target canvas on mouse up to trigger autosave
  const handleMouseUp = () => {
    console.log('mouse up');
    setAutoSaveActive(true);
    autoSave();
  };

  console.log('autoSaveActive 116: ', autoSaveActive);

  return loading ? (
    <h1>loading</h1>
  ) : (
    <Container maxWidth="lg" sx={{ margin: 0, padding: 0 }}>
      <TopBar />
      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
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
          saveData={localStorage.getItem(currentArt)}
          immediateLoading={true}
        />
      </div>
      <Colors />
      {!panZoom && <BottomBar canvas={canvasDraw} />}
    </Container>
  );
};

export default Canvas;
