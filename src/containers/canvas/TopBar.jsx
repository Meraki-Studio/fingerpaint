import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

import { usePanZoom, useMaxCanvas } from '../../state/UserProvider';
import Back from './buttons/Back';
import PanZoom from './buttons/PanZoom';
import ShowHide from './buttons/ShowHide';

export default function TopBar() {
  const { panZoom, setPanZoom } = usePanZoom();
  const { maxCanvas, setMaxCanvas } = useMaxCanvas();
  const navigate = useNavigate();

  const backClick = () => {
    navigate('/');
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
          {/* <img
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
          /> */}
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
