import { createContext,useContext,useState,useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [chats,setchats] = useState([]);
    const [selectedChat,setselectedChat] = useState(null);

    const val = {user,setUser,chats,setchats,selectedChat,setselectedChat};

    return (
        <AppContext.Provider value={val}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);