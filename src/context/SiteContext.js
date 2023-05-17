import { useContext, useReducer, createContext } from "react";
import { siteReducer } from "../reducers"

const Context = createContext();

const Provider = ({children}) => {

    const [state, dispatch] = useReducer(siteReducer, {
        theme: 'light',
        language: 'TR'
    });

    const data = {
        ...state,
        dispatch
    }

    return(
        <Context.Provider value={data}>

            {children}

        </Context.Provider>
    )
}

export const useSite = () => useContext(Context);

export default Provider