import React, { useState, createContext, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserContext = createContext();

export function UserProvider({ children }) {
    // state here
    const [canvasOptions, setCanvasOptions] = useState();
    const [hidden, setHidden] = useState(false);
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

    const [topTools] = useState([
        {
          icon: 'arrow-left',
          id: 1,
          onClick: () => {
            console.log('back');
            navigate('/home');
          },
        },
        {
          icon: 'undo-alt',
          id: 2,
          onClick: () => {
            console.log('undo');
          },
        },
        {
          icon: 'redo-alt',
          id: 3,
          onClick: () => console.log('redo'),
        },
        {
          icon: 'expand-arrows-alt',
          id: 4,
          onClick: () => {
            setPZ(!PZ);
            console.log('pan/zoom: ', PZ);
          },
        },
        {
          icon: 'eye',
          id: 5,
          onClick: () => {
            setHidden(!hidden);
            console.log('show/hide');
          },
        },
      ]);

    const [bottomTools] = useState([
        {
          icon: 'palette',
          id: 6,
          onClick: () => {
            console.log('palette');
            setShowPalette(!showPalette);
          },
        },
        {
          icon: 'paint-brush',
          id: 7,
          onClick: () => {
            console.log('brush');
            setErase(false);
          },
        },
        {
          icon: 'stamp',
          id: 8,
          onClick: () => console.log('stamp'),
        },
        {
          icon: 'fill-drip',
          id: 9,
          onClick: () => {
            console.log('fill');
          },
        },
        {
          icon: 'image',
          id: 10,
          onClick: () => console.log('image'),
        },
        {
          icon: 'eraser',
          id: 11,
          onClick: ({ target }) => {
            console.log(`within eraser! erase: ${erase}, color: ${color}`);
            setErase(true);
          },
        },
      ]);

    // useEffect to load art upon login

    return (
        <UserContext.Provider
            value={{
                myArt,
                setMyArt,
                hidden,
                setHidden,
                canvasOptions,
                setCanvasOptions,
                topTools,
                bottomTools
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

// Provider custom hooks
export const useHidden = () => {
    const { hidden, setHidden } = useContext(UserContext);
    return { hidden, setHidden };
}
export const useMyArt = () => {
    const { myArt, setMyArt } = useContext(UserContext);
    return { myArt, setMyArt };
};

export const useCanvasOptions = () => {
    const { canvasOptions, setCanvasOptions } = useContext(UserContext);
    return { canvasOptions, setCanvasOptions };
};

export const useTools = () => {
    const {topTools, bottomTools} = useContext(UserContext);
    return {topTools, bottomTools};
}
