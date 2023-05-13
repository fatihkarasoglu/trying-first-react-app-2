import { useContext, useState, createContext } from "react";

const Context = createContext();

const Provider = ({children}) => {

    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('TR');

    const data = {
        theme,
        setTheme,
        language,
        setLanguage
    }

    return(
        <Context.Provider value={data}>

            {children}

        </Context.Provider>
    )
}

export const useSite = () => useContext(Context);

export default Provider