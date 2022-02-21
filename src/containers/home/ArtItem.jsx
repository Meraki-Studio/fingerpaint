import React, { useRef } from 'react';
import { itemTypes } from '../../utils/itemTypes';
import { useDrag } from 'react-dnd';
import '../containers.scss';

import ImageListItem from '@mui/material/ImageListItem';
import CanvasDraw from 'react-canvas-draw';

export default function ArtItem({ art }) {
  console.log('art: ', art);

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

  return (
    <ImageListItem className="artContainer" ref={drag}>
      <CanvasDraw
        disabled={true}
        // style={{
        //   touchAction: 'none',
        //   position: 'relative',
        //   zIndex: 7,
        //   maxWidth: '20rem',
        //   maxHeight: '15rem',
        // }}
        hidegrid={true}
        ref={canvasRef}
        saveData={localStorage.getItem(art)}
        className="art"
      />
    </ImageListItem>
  );
}
