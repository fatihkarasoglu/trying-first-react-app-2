import { useContext, useReducer, createContext } from "react";
import { authReducer } from "../reducers"

const Context = createContext();

const Provider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: false
    })

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

export const useAuth = () => useContext(Context);

export default Provider