import { Action, FavouriteState } from "../types/Types";

export const reducer = (state: FavouriteState, action: Action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state, favourites: [...state.favourites, action.payload]
            }
        case "REMOVE": 
            return {
                favourites: state.favourites.filter((fav) => fav.id !== action.payload)
            }
        default:
            return state;
    }
}