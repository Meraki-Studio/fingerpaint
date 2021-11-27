import { ButtonBase } from '@mui/material';
import React from 'react';

export default function Button({ onClick, title, color }) {
  return (
    <ButtonBase color={color} onClick={onClick}>
      {title}
    </ButtonBase>
  );
}
