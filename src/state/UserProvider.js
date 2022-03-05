import React, { useState, createContext, useContext, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  // state here
  const [saveActive, setSaveActive] = useState(false);
  const [canvasCommands, setCanvasCommands] = useState();
  const [canvasOptions, setCanvasOptions] = useState();
  const [showPalette, setShowPalette] = useState(false);
  const [maxCanvas, setMaxCanvas] = useState(false);
  const [currentArt, setCurrentArt] = useState();
  const [panZoom, setPanZoom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('#F99D1F');
  const [erase, setErase] = useState(false);
  const [myArt, setMyArt] = useState([]);
  const [timer, setTimer] = useState(false);

  // save art to local storage
  useEffect(() => {
    if (!currentArt) {
      console.log('Provider Save: no current art');
    } else {
      console.log('Provider Save: Activated');
      localStorage.setItem(currentArt, canvasCommands.getSaveData())
    }
  }, [saveActive]);

  // start timer for auto save
  useEffect(() => {
    let time = setTimeout(() => {
      if(!timer){ 
        console.log('no timer active');
        clearTimeout(time);
        return;
      } else {
        console.log('timer active, saving');
        setSaveActive(!saveActive);
        setTimer(false);
      }
    }, 5000);
    if (!timer) {
      clearTimeout(time);
    }
  }, [timer]);

  return (
    <UserContext.Provider
      value={{
        timer,
        setTimer,
        myArt,
        setMyArt,
        color,
        setColor,
        erase,
        setErase,
        loading,
        setLoading,
        panZoom,
        setPanZoom,
        currentArt,
        setCurrentArt,
        maxCanvas,
        setMaxCanvas,
        showPalette,
        setShowPalette,
        canvasOptions,
        setCanvasOptions,
        canvasCommands,
        setCanvasCommands,
        saveActive,
        setSaveActive,
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
export const useCurrentArt = () => {
  const { currentArt, setCurrentArt } = useContext(UserContext);
  return { currentArt, setCurrentArt };
}
export const useLoading = () => {
  const { loading, setLoading } = useContext(UserContext);
  return { loading, setLoading };
}
export const useSaveActive = () => {
  const { saveActive, setSaveActive } = useContext(UserContext);
  return { saveActive, setSaveActive };
}
export const useTimer = () => {
  const { timer, setTimer } = useContext(UserContext);
  return { timer, setTimer };
}
