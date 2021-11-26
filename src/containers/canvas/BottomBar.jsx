import React from 'react';
import {
  usePanZoom,
  useMaxCanvas,
  useColor,
  useErase,
  usePalette,
} from '../../state/UserProvider';
import { AppBar, Toolbar } from '@mui/material';
import { useAssets } from '../../utils/useAssets';

export default function BottomBar() {
  const { panZoom } = usePanZoom();
  const { maxCanvas } = useMaxCanvas();
  const { color } = useColor();
  const { erase, setErase } = useErase();
  const { showPalette, setShowPalette } = usePalette();

  const bottomTools = [
    {
      icon: 'color-palette',
      onClick: () => {
        console.log('palette');
        setShowPalette(!showPalette);
      },
    },
    {
      icon: 'paint-brush',
      onClick: () => {
        console.log('brush');
        setErase(false);
      },
    },
    {
      icon: 'stamp',
      onClick: () => console.log('stamp'),
    },
    {
      icon: 'photo',
      onClick: () => console.log('image'),
    },
    {
      icon: 'eraser',
      onClick: ({ target }) => {
        console.log(`within eraser! erase: ${erase}, color: ${color}`);
        setErase(true);
      },
    },
  ];

  return (
    <>
      {panZoom || maxCanvas ? (
        <div
          style={{
            position: 'absolute',
            top: 'auto',
            bottom: 0,
            zIndex: 8,
            margin: '0 1rem',
          }}
        >
          <img
            src={useAssets('ui', bottomTools[0].icon)}
            alt={bottomTools[0].icon}
            className="minimalIcon"
            onClick={bottomTools[0].onClick}
            height="75px"
          />
        </div>
      ) : (
        <AppBar
          position="absolute"
          color="transparent"
          sx={{ top: 'auto', bottom: 0, zIndex: 8 }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            }}
          >
            {bottomTools.map((tool) => {
              return (
                <img
                  src={useAssets('ui', tool.icon)}
                  alt={tool.icon}
                  style={{
                    borderRadius: '50px',
                    padding: '.7rem',
                    background: 'white',
                  }}
                  onClick={tool.onClick}
                  height="75px"
                />
              );
            })}
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}
