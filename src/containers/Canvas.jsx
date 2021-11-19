import React, { useContext } from 'react';
// import ToolDrawer from '../components/canvas/ToolDrawer';
import { useCanvas, UserContext } from '../state/UserProvider';

const Canvas = () => {
    const { draw } = useContext(UserContext);
    const canvasRef = useCanvas(draw);

    return (
        <section>
            <h1>This is your Canvas! Express yourself!</h1>
            {/* <ToolDrawer /> */}
            <canvas style={{ border: 'solid red 5px' }} ref={canvasRef} />
        </section>
    );
};

export default Canvas;
