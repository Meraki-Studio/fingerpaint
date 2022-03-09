import React from 'react';
import {
  useMaxCanvas,
  useColor,
  useErase,
  usePalette,
} from '../../state/UserProvider';
import { AppBar, Toolbar, Button } from '@mui/material';
import Palette from './buttons/Palette';
import Brush from './buttons/Brush';

export default function BottomBar({ canvas }) {
  const { maxCanvas } = useMaxCanvas();
  const { color } = useColor();
  const { setErase } = useErase();
  const { showPalette, setShowPalette } = usePalette();

  const paletteClick = () => {
    setShowPalette(!showPalette);
  };
  const brushClick = () => {
    setErase(false);
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
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}
