import React, { useEffect, useRef } from 'react';
import ToolDrawer from '../components/canvas/ToolDrawer';

const Canvas = (props) => {
    const {
        // draw,
        ...rest
    } = props;

    const canvasRef = useRef(null);

    useEffect(
        () => {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            let frameCount = 0;
            let animationFrameId;

            const render = () => {
                frameCount++;
                context.fillStyle = '#000000';
                context.fillRect(
                    0,
                    0,
                    context.canvas.width,
                    context.canvas.height
                );
                // draw(context, frameCount);
                animationFrameId = window.requestAnimationFrame(render);
            };
            render();

            return () => {
                window.cancelAnimationFrame(animationFrameId);
            };
        },
        [
            // draw
        ]
    );
    return (
        <section>
            <h1>This is your Canvas! Express yourself!</h1>
            <ToolDrawer />
            <canvas ref={canvasRef} {...rest} />
        </section>
    );
};

export default Canvas;
