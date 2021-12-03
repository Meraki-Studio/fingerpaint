import React, { useEffect } from 'react';
// import { Drawer } from '@mui/material';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useColor, usePalette } from '../../state/UserProvider';
import './Canvas.scss';

export default function Colors() {
  const { color, setColor } = useColor();
  const { showPalette, setShowPalette } = usePalette();

  const handleColorChange = (hex) => {
    setColor(`${hex}`);
    setShowPalette(!showPalette);
  };

  // useEffect(() => {
  //   console.log('this is now the color: ', color);
  // }, [color]);

  const colors = [
    '#393939',
    '#FFFFFF',
    '#E8E8E8',
    '#B7B7B7',
    '#707070',
    '#FF3B30',
    '#A10900',
    '#D20B00',
    '#FF7871',
    '#FFD5D2',
    '#017AFF',
    '#33C75A',
    '#5956D6',
    '#5AC9FA',
    '#F99D1F',
    '#FFCC00',
    '#004EA1',
    '#0066D2',
    '#0071A1',
    '#0093D2',
    '#00A12B',
    '#00D238',
    '#0300A1',
    '#0400D2',
    '#71B5FF',
    '#71D4FF',
    '#71FF97',
    '#7371FF',
    '#9D5E04',
    '#A18100',
    '#CD7A05',
    '#D2A800',
    '#D2E8FF',
    '#D2F2FF',
    '#D2FFDE',
    '#D3D2FF',
    '#FBC374',
    '#FEECD3',
    '#FFE371',
    '#FFF6D2',
  ];

  return (
    <>
      {showPalette && (
        <div className="colorContainer">
          {colors.map((color) => (
            <button
              key={color}
              style={{
                backgroundColor: color,
                height: '40px',
                width: '40px',
                boxSizing: 'borderBox',
                borderRadius: '10px',
                margin: '.2rem',
              }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      )}
    </>
  );
}
