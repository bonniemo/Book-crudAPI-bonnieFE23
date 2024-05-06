import { Action, InitialStateTypes } from "../types/Types";

export const reducer = (state: InitialStateTypes, action: Action) => {
  switch (action.type) {
    case "ADDFAVBOOK":
      return {
        ...state,
        favouriteBooks: [...state.favouriteBooks, action.payload],
      };
    case "REMOVEFAVBOOK":
      return {
        ...state,
        favouriteBooks: state.favouriteBooks.filter(
          (fav) => fav.key !== action.payload
        ),
      };
    default:
      return state;
  }
};
