import { createContext } from "react";
import { Action, FavouriteState } from "../types/Types";

export const InitialFavouriteState: FavouriteState = {
    favourites: [],
    // readbooks: [],
};

export const GlobalContext = createContext<{
    state: FavouriteState;
    dispatch: React.Dispatch<Action>;
}>({
    state: InitialFavouriteState,
    dispatch: () => null,
});