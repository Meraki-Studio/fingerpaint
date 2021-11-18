import React from 'react';
import Canvas from './Canvas.jsx';

const Landing = () => {
    // Draw function for Canvas
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
        ctx.fill;
    };
    return (
        <section>
            <p>Welcome to Fingerpaint! This is our landing page!</p>
            <Canvas draw={draw} />
        </section>
    );
};

export default Landing;
