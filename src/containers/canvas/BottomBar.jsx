import React from 'react';
import {
  useMaxCanvas,
  useColor,
  useErase,
  usePalette,
  useCanvasCommands,
} from '../../state/UserProvider';
import { AppBar, Toolbar, Button } from '@mui/material';
import Palette from './buttons/Palette';
import Brush from './buttons/Brush';

export default function BottomBar({ canvas }) {
  const { maxCanvas } = useMaxCanvas();
  const { color } = useColor();
  const { setErase } = useErase();
  const { showPalette, setShowPalette } = usePalette();
  const { canvasCommands } = useCanvasCommands();

  console.log('This is canvas: ', canvas);
  const canvasRef = canvas.current;
  console.log('This is canvasRef: ', canvasRef);
  console.log('This is canvasCommands: ', canvasCommands);

  const paletteClick = () => {
    setShowPalette(!showPalette);
  };
  const brushClick = () => {
    setErase(false);
  };
  const saveClick = () => {
    console.log('save has been activated');
    localStorage.setItem(Date.now(), canvasCommands.getSaveData());
  };

  return (
    <>
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
            <Button onClick={() => saveClick()} sx={{ padding: '16px' }}>
              SAVE
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}
