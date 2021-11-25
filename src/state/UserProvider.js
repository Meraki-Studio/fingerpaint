import React, { useState, createContext, useContext } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    // state here
    const [canvasOptions, setCanvasOptions] = useState();
    const [maxCanvas, setMaxCanvas] = useState(false);
    const [panZoom, setPanZoom] = useState(false);
    const [myArt, setMyArt] = useState([
        {
            id: 1,
            img: 'https://placekitten.com/96/140',
        },
        {
            id: 2,
            img: 'https://placekitten.com/96/139',
        },
        {
            id: 3,
            img: 'https://placekitten.com/200/287',
        },
        {
            id: 4,
            img: 'https://placekitten.com/96/140',
        },
        {
            id: 5,
            img: 'https://placekitten.com/96/139',
        },
        {
            id: 6,
            img: 'https://placekitten.com/200/287',
        },
        {
            id: 7,
            img: 'https://placekitten.com/96/140',
        },
        {
            id: 8,
            img: 'https://placekitten.com/96/139',
        },
        {
            id: 9,
            img: 'https://placekitten.com/200/287',
        },
    ]);


    // useEffect to load art upon login

    return (
        <UserContext.Provider
            value={{
                myArt,
                setMyArt,
                panZoom,
                setPanZoom,
                maxCanvas,
                setMaxCanvas,
                canvasOptions,
                setCanvasOptions,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

// Provider custom hooks
export const useMaxCanvas = () => {
    const { maxCanvas, setMaxCanvas } = useContext(UserContext);
    return { maxCanvas, setMaxCanvas };
}
export const usePanZoom = () => {
    const { panZoom, setPanZoom } = useContext(UserContext);
    return { panZoom, setPanZoom };
}
export const useMyArt = () => {
    const { myArt, setMyArt } = useContext(UserContext);
    return { myArt, setMyArt };
}
export const useCanvasOptions = () => {
    const { canvasOptions, setCanvasOptions } = useContext(UserContext);
    return { canvasOptions, setCanvasOptions };
}
