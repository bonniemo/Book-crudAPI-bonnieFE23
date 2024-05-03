export type Book = {
    title: string;
    first_publish_year: number;
    author_name: string[];
    cover_i: string;
  };

  export type DisplayBookProps = {
    data: {
        docs: Book[];
    }
  }

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