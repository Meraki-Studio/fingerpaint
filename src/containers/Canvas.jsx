import React from 'react';
import CanvasBoard from '../components/canvas/CanvasBoard';

const Canvas = ({ draw }) => {
    return (
        <>
            <CanvasBoard draw={draw} />
        </>
    );
};

export default Canvas;
