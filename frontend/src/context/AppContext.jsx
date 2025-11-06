import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const val = { 
    darkMode, 
    setDarkMode,
    isSearchActive,
    setIsSearchActive 
  };

  return (
    <AppContext.Provider value={val}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
