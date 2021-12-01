import React from 'react';
import {
  usePanZoom,
  useMaxCanvas,
  useColor,
  useErase,
  usePalette,
} from '../../state/UserProvider';
import { AppBar, Toolbar, Button } from '@mui/material';
import Palette from './buttons/Palette';
import Brush from './buttons/Brush';
import Eraser from './buttons/Eraser';
import { useAssets } from '../../utils/useAssets';

export default function BottomBar() {
  const { panZoom } = usePanZoom();
  const { maxCanvas } = useMaxCanvas();
  const { color } = useColor();
  const { erase, setErase } = useErase();
  const { showPalette, setShowPalette } = usePalette();

  const paletteClick = () => {
    setShowPalette(!showPalette);
  };
  const brushClick = () => {
    setErase(false);
  };
  const eraseClick = ({ target }) => {
    setShowPalette(false);
    setErase(true);
  };

  return (
    <>
      {maxCanvas ? (
        <div
          style={{
            position: 'absolute',
            top: 'auto',
            bottom: 0,
            zIndex: 8,
            margin: '0 1rem',
          }}
        >
          <Palette
            alt="palette"
            className="minimalIcon"
            onClick={paletteClick}
            height="30px"
          />
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
            <Button onClick={eraseClick} sx={{ padding: '16px' }}>
              <Eraser alt="eraser" className="minimalIcon" height="30px" />
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}
