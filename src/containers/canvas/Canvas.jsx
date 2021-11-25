import React, { useRef, useState } from 'react';
import { CirclePicker } from 'react-color';
import { useNavigate } from 'react-router-dom';

import {
  useCanvasOptions,
  useHidden,
  useTools,
} from '../../state/UserProvider';
import CanvasDraw from '../../utils/eraser/index';
import { getIcon } from '../../utils/useIcons';

import { AppBar, Drawer, Toolbar, Container, IconButton } from '@mui/material';

import './Canvas.scss';

const Canvas = () => {
  const { canvasOptions, setCanvasOptions } = useCanvasOptions();
  const { topTools, bottomTools } = useTools();
  const { hidden, setHidden } = useHidden();
  const [PZ, setPZ] = useState(false);
  const [color, setColor] = useState('#000');
  const [erase, setErase] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const navigate = useNavigate();

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
  // const handleChange = (name, value) => {
  //     setCanvasOptions((prevState) => ({
  //         ...prevState,
  //         [name]: value,
  //     }));
  // };

  const canvas = useRef();
  const canvasRef = canvas.current;

  const clearCanvas = () => {
    canvasRef.eraseAll();
  };

  const saveCanvas = () => {
    localStorage.setItem('savedCanvas', canvasRef.getSaveData());
  };

  const handleColorChange = ({ hex }) => {
    setColor(hex);
    setShowPalette(!showPalette);
  };

  let topBar;
  let bottomBar;

  {
    hidden
      ? (bottomBar = 'bottomHidden') && (topBar = 'topHidden')
      : (bottomBar = 'barNoHide') && (topBar = 'barNoHide');
  }

  return (
    <Container maxWidth="lg" sx={{ margin: 0, padding: 0 }}>
      <AppBar
        position="absolute"
        color="transparent"
        sx={{
          top: 0,
          bottom: 'auto',
          boxShadow: 'none',
          pointerEvents: 'none',
        }}
      >
        <Toolbar className={topBar}>
          {hidden ? (
            <IconButton
              style={{
                borderRadius: '50px',
                padding: '.7rem',
                background: 'white',
              }}
              onClick={topTools[4].onClick}
            >
              <img
                src={getIcon('ui', topTools[4].icon)}
                alt={topTools[4].icon}
              />
            </IconButton>
          ) : (
            topTools.map((tool) => {
              return (
                <span key={tool.id}>
                  <IconButton
                    style={{
                      borderRadius: '50px',
                      padding: '.7rem',
                      background: 'white',
                    }}
                    onClick={tool.onClick}
                  >
                    <img src={getIcon('ui', tool.icon)} alt={tool.icon} />
                  </IconButton>
                </span>
              );
            })
          )}
        </Toolbar>
      </AppBar>
      <CanvasDraw
        style={{ touchAction: 'none', position: 'relative' }}
        ref={canvasRef}
        {...canvasOptions}
        canvasHeight={window.screen.height}
        canvasWidth={window.screen.width}
        enablePanAndZoom={PZ}
        brushColor={color}
        erase={erase}
      />

      <AppBar
        position="absolute"
        color="transparent"
        sx={{
          top: 'auto',
          bottom: 0,
          boxShadow: 'none',
          pointerEvents: 'none',
        }}
      >
        <Toolbar className={bottomBar}>
          <Drawer variant="persistent" anchor="bottom" open={showPalette}>
            {/* {showPalette ? ( */}
            <CirclePicker
              onChange={(color) => handleColorChange(color)}
              color={color}
            />
            {/* ) : null} */}
          </Drawer>
          {hidden ? (
            <IconButton
              style={{
                borderRadius: '50px',
                padding: '.7rem',
                background: 'white',
              }}
              onClick={bottomTools[0].onClick}
            >
              <img
                src={getIcon('ui', bottomTools[0].icon)}
                alt={bottomTools[0].icon}
              />
            </IconButton>
          ) : (
            bottomTools.map((tool) => {
              return (
                <span key={tool.id}>
                  <IconButton
                    style={{
                      borderRadius: '50px',
                      padding: '.7rem',
                      background: 'white',
                    }}
                    onClick={tool.onClick}
                  >
                    <img src={getIcon('ui', tool.icon)} alt={tool.icon} />
                  </IconButton>
                </span>
              );
            })
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Canvas;
