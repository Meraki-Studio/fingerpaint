import React, { useState, createContext, useContext } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    // state here
    const [myArt, setMyArt] = useState();
    const [canvasOptions, setCanvasOptions] = useState();

    // useEffect to load art upon login

    return (
        <UserContext.Provider
            value={{
                myArt,
                setMyArt,
                canvasOptions,
                setCanvasOptions,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

// Provider custom hooks
export const useMyArt = () => {
    const { myArt, setMyArt } = useContext(UserContext);
    return { myArt, setMyArt };
};

export const useCanvasOptions = () => {
    const { canvasOptions, setCanvasOptions } = useContext(UserContext);
    return { canvasOptions, setCanvasOptions };
};
