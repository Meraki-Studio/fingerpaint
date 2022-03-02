import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

import {
  usePanZoom,
  useMaxCanvas,
  useCanvasCommands,
  useCurrentArt,
} from '../../state/UserProvider';
import Back from './buttons/Back';
import Undo from './buttons/Undo';
import Eraser from './buttons/Eraser';
import PanZoom from './buttons/PanZoom';
import ShowHide from './buttons/ShowHide';

export default function TopBar() {
  const { panZoom, setPanZoom } = usePanZoom();
  const { maxCanvas, setMaxCanvas } = useMaxCanvas();
  const { canvasCommands } = useCanvasCommands();
  const { currentArt } = useCurrentArt();
  const navigate = useNavigate();

  const backClick = () => {
    localStorage.setItem(currentArt, canvasCommands.getSaveData());
    clearInterval();
    console.log('saved and navigated back');
    navigate('/home');
  };

  const undo = () => {
    console.log('undo has been activated');
    canvasCommands.undo();
  };

  const eraseAll = () => {
    console.log('erase all activated');
    canvasCommands.eraseAll();
  };

  const panClick = () => {
    setPanZoom(!panZoom);
    console.log('panZoom activated! ', panZoom);
  };

  const maxClick = () => {
    setMaxCanvas(!maxCanvas);
    setPanZoom(false);
    console.log('maxCanvas activated! ', maxCanvas);
  };

  return (
    <>
      {maxCanvas ? (
        <div
          className="minimalIcons"
          style={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            top: 0,
            bottom: 'auto',
            right: 0,
            left: 'auto',
            zIndex: 8,
            margin: '.5rem 1rem',
          }}
        >
          <Button onClick={panClick} sx={{ padding: '10px' }}>
            <PanZoom />
          </Button>
          <Button onClick={maxClick} sx={{ padding: '10px' }}>
            <ShowHide />
          </Button>
        </div>
      ) : (
        <AppBar
          position="absolute"
          color="transparent"
          sx={{ top: 0, bottom: 'auto', backgroundColor: 'white', zIndex: 8 }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button onClick={backClick} sx={{ padding: '16px' }}>
              <Back />
            </Button>
            <Button onClick={() => undo()}>
              <Undo />
            </Button>
            <Button onClick={() => eraseAll()}>
              <Eraser alt="eraser" className="minimalIcon" height="30px" />
            </Button>
            <Button onClick={panClick}>
              <PanZoom />
            </Button>
            <Button onClick={maxClick}>
              <ShowHide />
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}
