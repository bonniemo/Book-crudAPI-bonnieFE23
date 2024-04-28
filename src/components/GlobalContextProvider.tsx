import { useReducer } from "react"
import { GlobalContext, InitialFavouriteState } from "../state/GlobalStateContext"
import { reducer } from "../state/Reducer"
import { GlobalContextProviderProp } from "../types/Types"



const GlobalContextProvider = ({ children }: GlobalContextProviderProp) => {
    const [state, dispatch] = useReducer(reducer, InitialFavouriteState);
  return (
    <>
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    </>
  )
}

export default GlobalContextProvider