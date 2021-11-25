import React, { useRef, useState } from 'react';

import { usePanZoom, useMaxCanvas } from '../../state/UserProvider';
import { AppBar, Toolbar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNavigate } from 'react-router-dom';

export default function TopBar() {
  const { panZoom, setPanZoom } = usePanZoom();
  const { maxCanvas, setMaxCanvas } = useMaxCanvas();
  const navigate = useNavigate();

  const topTools = [
    {
      icon: 'arrow-left',
      onClick: () => {
        console.log('Get back home!');
        navigate('/home');
      },
    },
    {
      icon: 'undo-alt',
      onClick: () => {
        console.log('undo');
      },
    },
    {
      icon: 'redo-alt',
      onClick: () => console.log('redo'),
    },
    {
      icon: 'expand-arrows-alt',
      onClick: () => {
        setPanZoom(!panZoom);
        console.log('panZoom activated! ', panZoom);
      },
    },
    {
      icon: 'eye',
      onClick: () => {
        setMaxCanvas(!maxCanvas);
        console.log('maxCanvas activated! ', maxCanvas);
      },
    },
  ];

  return (
    <>
      {panZoom || maxCanvas ? (
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
          <FontAwesomeIcon
            icon={topTools[3].icon}
            className="minimalIcon"
            onClick={topTools[3].onClick}
          />
          <FontAwesomeIcon
            icon={topTools[4].icon}
            className="minimalIcon"
            onClick={topTools[4].onClick}
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
                <FontAwesomeIcon
                  key={tool.icon}
                  icon={tool.icon}
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
