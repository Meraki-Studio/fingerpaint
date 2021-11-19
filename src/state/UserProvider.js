import React, {
    useState,
    createContext,
    useContext,
    useRef,
    useEffect,
} from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    // state here
    const [myArt, setMyArt] = useState();

    // Draw function for Canvas
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(
            50,
            100,
            20 * Math.sin(frameCount * 0.025) ** 2,
            0,
            2 * Math.PI
        );
        ctx.fill();
    };

    // useEffect to load art upon login

    return (
        <UserContext.Provider value={{ myArt, setMyArt, draw }}>
            {children}
        </UserContext.Provider>
    );
}

// Provider custom hooks
export const useMyArt = () => {
    const { myArt, setMyArt } = useContext(UserContext);
    return { myArt, setMyArt };
};

export const useCanvas = (draw) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return canvasRef;
};
