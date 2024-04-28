
export type Favourite = {
    id: string;
    title: string;
}

export type FavouriteState = {
    favourites: Favourite[];
}

export type GlobalContextProviderProp = {
    children: React.ReactNode;
}

export type Action = 
| { type: "ADD"; payload: Favourite }
| { type: "REMOVE"; payload: string }