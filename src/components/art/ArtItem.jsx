import React from 'react';
import CanvasDraw from 'react-canvas-draw';

export default function ArtItem(art) {
  const canvasRef = useRef();
  return (
    <CanvasDraw
      disabled
      hidegrid
      ref={canvasRef}
      saveData={localStorage.getItem(art)}
    />
  );
}
