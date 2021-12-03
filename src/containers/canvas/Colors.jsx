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

  const colors = [
    // gray scale
    '#393939',
    '#FFFFFF',
    '#E8E8E8',
    '#B7B7B7',
    '#707070',
    // reds
    '#FF3B30',
    '#FFD5D2',
    '#FF7871',
    '#D20B00',
    '#A10900',
    // oranges
    '#F99D1F',
    '#FEECD3',
    '#FBC374',
    '#CD7A05',
    '#9D5E04',
    // yellows
    '#FFCC00',
    '#FFF6D2',
    '#FFE371',
    '#D2A800',
    '#A18100',
    // greens
    '#33C75A',
    '#D2FFDE',
    '#71FF97',
    '#00D238',
    '#00A12B',
    // blue 1
    '#5AC9FA',
    '#D2F2FF',
    '#71D4FF',
    '#0093D2',
    '#0071A1',
    // blue 2
    '#017AFF',
    '#D2E8FF',
    '#71B5FF',
    '#0066D2',
    '#004EA1',
    // purples
    '#5956D6',
    '#D3D2FF',
    '#7371FF',
    '#0400D2',
    '#0300A1',
    // what's next?
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
