import React, { useRef, useState } from 'react';

import { usePanZoom, useMaxCanvas } from '../../state/UserProvider';
import { AppBar, Drawer, Toolbar } from '@mui/material';
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
        <div className="minimalIcons">
          <FontAwesomeIcon
            icon={topTools[3].icon}
            style={{
              borderRadius: '50px',
              padding: '.7rem',
              background: 'white',
            }}
            onClick={topTools[3].onClick}
          />
          <FontAwesomeIcon
            icon={topTools[4].icon}
            style={{
              borderRadius: '50px',
              padding: '.7rem',
              background: 'white',
            }}
            onClick={topTools[4].onClick}
          />
        </div>
      ) : (
        <AppBar
          position="absolute"
          color="transparent"
          sx={{ top: 0, bottom: 'auto', boxShadow: 'none' }}
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