import React, { useState, createContext, useContext, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  // state here
  const [canvasCommands, setCanvasCommands] = useState();
  const [canvasOptions, setCanvasOptions] = useState();
  const [showPalette, setShowPalette] = useState(false);
  const [maxCanvas, setMaxCanvas] = useState(false);
  const [panZoom, setPanZoom] = useState(false);
  const [color, setColor] = useState('#F99D1F');
  const [erase, setErase] = useState(false);
  const [myArt, setMyArt] = useState([]);

  // useEffect to load art upon login
  useEffect(() => {
    // fetch art from localStorage
    const localArtKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      localArtKeys.push(key);
    }
    setMyArt(localArtKeys);
    console.log('Art keys pulled from localStorage: ', localArtKeys);
  }, [1]);

  return (
    <UserContext.Provider
      value={{
        myArt,
        setMyArt,
        color,
        setColor,
        erase,
        setErase,
        panZoom,
        setPanZoom,
        maxCanvas,
        setMaxCanvas,
        showPalette,
        setShowPalette,
        canvasOptions,
        setCanvasOptions,
        canvasCommands,
        setCanvasCommands,
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
};
export const usePanZoom = () => {
  const { panZoom, setPanZoom } = useContext(UserContext);
  return { panZoom, setPanZoom };
};
export const useMyArt = () => {
  const { myArt, setMyArt } = useContext(UserContext);
  return { myArt, setMyArt };
};
export const useErase = () => {
  const { erase, setErase } = useContext(UserContext);
  return { erase, setErase };
};
export const useColor = () => {
  const { color, setColor } = useContext(UserContext);
  return { color, setColor };
};
export const usePalette = () => {
  const { showPalette, setShowPalette } = useContext(UserContext);
  return { showPalette, setShowPalette };
};
export const useCanvasOptions = () => {
  const { canvasOptions, setCanvasOptions } = useContext(UserContext);
  return { canvasOptions, setCanvasOptions };
};

export const useCanvasCommands = () => {
  const { canvasCommands, setCanvasCommands } = useContext(UserContext);
  return { canvasCommands, setCanvasCommands };
}
