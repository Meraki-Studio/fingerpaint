import React, { useRef, useState, createContext, useContext, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  // state for for art commands
  const [showPalette, setShowPalette] = useState(false);
  const [maxCanvas, setMaxCanvas] = useState(false);
  const [panZoom, setPanZoom] = useState(false);
  const [color, setColor] = useState('#F99D1F');
  const [erase, setErase] = useState(false);

  // art management
  const [artId, setArtId] = useState(Date.now());
  const [currentArt, setCurrentArt] = useState();

  // other state
  const [myArt, setMyArt] = useState([]);
  const [canvasOptions, setCanvasOptions] = useState();
  const [loading, setLoading] = useState(false);

  // state for art saving
  const [canvasCommands, setCanvasCommands] = useState();
  const [saveActive, setSaveActive] = useState(false);

  // state for auto save
  const [timer, setTimer] = useState(false);
  const [idleTime, setIdleTime] = useState(0);
  const [keepCounting, setKeepCounting] = useState(false);
  const [incrementIdle, setIncrementIdle] = useState(false);

  // save art to local storage
  useEffect(() => {
    if (!artId) {
      // console.log('Provider Save: no current art');
    } else {
      setLoading(true);
      console.log('Provider Save: Activated');
      localStorage.setItem(
        artId, canvasCommands.getSaveData()
      );
      setTimer(false);
      setLoading(false);
    }
  }, [saveActive]);

  // start timer or cancel it if timer is false
  useEffect(() => {
    if (timer === false) {
      setIdleTime(0);
    } else if (timer === true) {
      setIncrementIdle(!incrementIdle);
    }
  }, [timer, keepCounting]);

  // increment timer or save if timer = 15 seconds
  useEffect(() => {
    if (idleTime < 10 && timer === true) {
      setTimeout(() => {
        setIdleTime(idleTime + 1);
        // console.log('timer is true, timeout: ', idleTime);
        setKeepCounting(!keepCounting);
      }, 1500);
    } else if (idleTime >= 10 && timer === true) {
      setTimer(false);
      setSaveActive(!saveActive);
      setIdleTime(0);
    }
  }, [incrementIdle]);

  return (
    <UserContext.Provider
      value={{
        artId,
        setArtId,
        timer,
        setTimer,
        idleTime,
        setIdleTime,
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
export const useIdleTime = () => {
  const { idleTime, setIdleTime } = useContext(UserContext);
  return { idleTime, setIdleTime };
}
export const useArtId = () => {
  const { artId, setArtId } = useContext(UserContext);
  return { artId, setArtId };
}