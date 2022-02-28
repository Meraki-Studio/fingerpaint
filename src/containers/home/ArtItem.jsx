import React, { useRef } from 'react';
import { itemTypes } from '../../utils/itemTypes';
import { useDrag } from 'react-dnd';
import '../containers.scss';

import ImageListItem from '@mui/material/ImageListItem';
import CanvasDraw from 'react-canvas-draw';

export default function ArtItem({ art }) {
  // console.log('art: ', art);

  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.CARD,
    item: {
      id: art,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const canvasRef = useRef();

  const height = window.screen.height / 3;
  const width = window.screen.width / 3;

  return (
    <ImageListItem id="art">
      <CanvasDraw
        style={{
          touchAction: 'none',
          position: 'relative',
          zIndex: 7,
          maxWidth: '10rem',
          maxHeight: '15rem',
        }}
        hideGrid={true}
        immediateLoading={true}
        canvasHeight={height}
        canvasWidth={width}
        disabled={true}
        ref={canvasRef}
        saveData={localStorage.getItem(art)}
        className="art"
      />
    </ImageListItem>
  );
}
