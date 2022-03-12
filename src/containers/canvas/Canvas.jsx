import React, { useRef, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';

import {
  useCanvasCommands,
  useColor,
  useErase,
  usePanZoom,
  useCurrentArt,
  useLoading,
  useTimer,
  useArtId,
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
  const { currentArt } = useCurrentArt();
  const { loading, setLoading } = useLoading();
  const { setTimer } = useTimer();
  const { artId, setArtId } = useArtId();

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

  // Creates a reference to the canvas element
  const canvasDraw = useRef();
  let canvasRef = null;
  // let editArt = null;

  // Creates the canvas reference
  useEffect(() => {
    setLoading(true);
    // editArt = localStorage.getItem(currentArt);

    if (!artId) {
      setArtId(Date.now());
    }

    canvasRef = canvasDraw.current;
    setCanvasCommands(canvasRef);
    console.log('page loaded');

    setLoading(false);
  }, []);

  // target canvas on mouse down to disable timer
  const handleMouseDown = () => {
    // console.log('mouse down');
    setTimer(false);
  };

  // target canvas on mouse up to trigger autosave timer
  const handleMouseUp = () => {
    // console.log('mouse up');
    setTimer(true);
  };

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
          saveData={currentArt}
          immediateLoading={false}
        />
      </div>
      <Colors />
      {!panZoom && <BottomBar canvas={canvasDraw} />}
    </Container>
  );
};

export default Canvas;
