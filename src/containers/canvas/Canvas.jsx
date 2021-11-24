import React, { useRef, useState } from 'react';
import CanvasDraw from '../../utils/eraser/index';
import Container from '@mui/material/Container';
import { CirclePicker } from 'react-color';

import { useCanvasOptions } from '../../state/UserProvider';
import { AppBar, Drawer, Toolbar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNavigate } from 'react-router-dom';

const Canvas = () => {
  const { canvasOptions, setCanvasOptions } = useCanvasOptions();
  const [hidden, setHidden] = useState(false);
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

  const topTools = [
    {
      icon: 'arrow-left',
      onClick: () => {
        console.log('back');
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
        setPZ(!PZ);
        console.log('pan/zoom: ', PZ);
      },
    },
    {
      icon: 'eye',
      onClick: () => {
        setHidden(!hidden);
        console.log('show/hide');
      },
    },
  ];

  const bottomTools = [
    {
      icon: 'palette',
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
      icon: 'fill-drip',
      onClick: () => {
        console.log('fill');
      },
    },
    {
      icon: 'image',
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
    <Container maxWidth="lg" sx={{ margin: 0, padding: 0 }}>
      {hidden ? (
        <AppBar
          position="absolute"
          color="transparent"
          sx={{ top: 0, bottom: 'auto', boxShadow: 'none' }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <FontAwesomeIcon
              icon={topTools[4].icon}
              style={{
                borderRadius: '50px',
                padding: '.7rem',
                background: 'white',
              }}
              onClick={topTools[4].onClick}
            />
          </Toolbar>
        </AppBar>
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
      {hidden ? (
        <AppBar
          position="absolute"
          color="transparent"
          sx={{ top: 'auto', bottom: 0, boxShadow: 'none' }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'start',
            }}
          >
            <Drawer variant="persistent" anchor="bottom" open={showPalette}>
              {/* {showPalette ? ( */}
              <CirclePicker
                onChange={(color) => handleColorChange(color)}
                color={color}
              />
              {/* ) : null} */}
            </Drawer>
            <FontAwesomeIcon
              icon={bottomTools[0].icon}
              style={{
                borderRadius: '50px',
                padding: '.7rem',
                background: 'white',
              }}
              onClick={bottomTools[0].onClick}
            />
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar
          position="absolute"
          color="transparent"
          sx={{ top: 'auto', bottom: 0, boxShadow: 'none' }}
        >
          <Toolbar
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Drawer variant="persistent" anchor="bottom" open={showPalette}>
              {/* {showPalette ? ( */}
              <CirclePicker
                onChange={(color) => handleColorChange(color)}
                color={color}
              />
              {/* ) : null} */}
            </Drawer>
            {bottomTools.map((tool) => {
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
    </Container>
  );
};

export default Canvas;
