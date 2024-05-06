
import { Action, InitialStateTypes, } from "../types/Types";

export const reducer = (state: InitialStateTypes, action: Action) => {
    switch (action.type) {
        case "ADDFAVBOOK":            
            return {
                ...state, favouriteBooks: [...state.favouriteBooks, action.payload]
            }
        case "REMOVEFAVBOOK": 
            return {
                // favourites: state.favouriteBooks.filter((fav) => fav.id !== action.payload)
                state
            }
        default:
            return state;
    }
}