import React, {
    useState,
    createContext,
    useContext,
    useRef,
    useEffect,
} from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    // state here
    const [myArt, setMyArt] = useState([]);

    // useEffect to load art upon login

    return (
        <UserContext.Provider value={{ myArt, setMyArt }}>
            {children}
        </UserContext.Provider>
    );
}

// Provider custom hooks
export const useMyArt = () => {
    const { myArt, setMyArt } = useContext(UserContext);
    return { myArt, setMyArt };
};

export function useCanvas(draw) {
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
}
