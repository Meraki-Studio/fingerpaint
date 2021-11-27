import React, { useRef, useState } from 'react';

import { usePanZoom, useMaxCanvas } from '../../state/UserProvider';
import { AppBar, Toolbar } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useAssets } from '../../utils/useAssets';

export default function TopBar() {
  const { panZoom, setPanZoom } = usePanZoom();
  const { maxCanvas, setMaxCanvas } = useMaxCanvas();
  const navigate = useNavigate();

  const topTools = [
    {
      icon: 'left-arrow',
      onClick: () => {
        console.log('Get back home!');
        navigate('/');
      },
    },
    // {
    //   icon: 'undo',
    //   onClick: () => {
    //     console.log('undo');
    //   },
    // },
    // {
    //   icon: 'redo',
    //   onClick: () => console.log('redo'),
    // },
    {
      icon: 'pinch',
      onClick: () => {
        setPanZoom(!panZoom);
        console.log('panZoom activated! ', panZoom);
      },
    },
    {
      icon: 'hide_inactive_lt',
      onClick: () => {
        setMaxCanvas(!maxCanvas);
        setPanZoom(false);
        console.log('maxCanvas activated! ', maxCanvas);
      },
    },
  ];

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
          <img
            src={useAssets('ui', topTools[1].icon)}
            className="minimalIcon"
            height="30px"
            alt={topTools[1].icon}
            onClick={topTools[1].onClick}
          />
          <img
            src={useAssets('ui', topTools[2].icon)}
            className="minimalIcon"
            height="30px"
            alt={topTools[2].icon}
            onClick={topTools[2].onClick}
          />
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
            {topTools.map((tool) => {
              return (
                <img
                  key={tool.icon}
                  height="75px"
                  src={useAssets('ui', tool.icon)}
                  alt={tool.icon}
                  style={{
                    borderRadius: '50px',
                    padding: '.7rem',
                    background: 'white',
                  }}
                  onClick={tool.onClick}
                />
              );
            })}
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}
