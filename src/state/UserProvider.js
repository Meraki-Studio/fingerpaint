import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    // state here
    const [myArt, setMyArt] = useState();

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
