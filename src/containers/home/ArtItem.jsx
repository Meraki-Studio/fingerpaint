import React from 'react';
import { itemTypes } from '../../utils/itemTypes';
import { useDrag } from 'react-dnd';
import '../containers.scss';

import ImageListItem from '@mui/material/ImageListItem';

export default function ArtItem({ art }) {
  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.CARD,
    item: {
      id: art.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <ImageListItem className="artContainer" ref={drag}>
      <img src={art.img} alt="fingerpainting" className="art" />
    </ImageListItem>
  );
}
