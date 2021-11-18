import React from 'react';
import { useCanvas } from '../../state/UserProvider';

const CanvasBoard = (props) => {
    const { draw, ...rest } = props;
    const canvasRef = useCanvas(draw);

    return <canvas ref={canvasRef} {...rest} />;
};

export default CanvasBoard;
