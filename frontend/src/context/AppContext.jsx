import { createContext,useContext,useState,useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    const val = { darkMode, setDarkMode };

    return (
        <AppContext.Provider value={val}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);