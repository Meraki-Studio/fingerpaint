import React, { useState, createContext, useContext } from 'react';

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
      icon: 'left-arrow',
      id: 1,
      onClick: () => {
        console.log('back');
        navigate('/home');
      },
    },
    {
      icon: 'undo',
      id: 2,
      onClick: () => {
        console.log('undo');
      },
    },
    {
      icon: 'redo',
      id: 3,
      onClick: () => console.log('redo'),
    },
    {
      icon: 'pinch',
      id: 4,
      onClick: () => {
        setPZ(!PZ);
        console.log('pan/zoom: ', PZ);
      },
    },
    {
      icon: 'hide_inactive_lt',
      id: 5,
      onClick: () => {
        setHidden(!hidden);
        console.log('show/hide');
      },
    },
  ]);

  const [bottomTools] = useState([
    {
      icon: 'color-palette',
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
      icon: 'paint-bucket',
      id: 9,
      onClick: () => {
        console.log('fill');
      },
    },
    {
      icon: 'photo',
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
        bottomTools,
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
};
export const useMyArt = () => {
  const { myArt, setMyArt } = useContext(UserContext);
  return { myArt, setMyArt };
};

export const useCanvasOptions = () => {
  const { canvasOptions, setCanvasOptions } = useContext(UserContext);
  return { canvasOptions, setCanvasOptions };
};

export const useTools = () => {
  const { topTools, bottomTools } = useContext(UserContext);
  return { topTools, bottomTools };
};
