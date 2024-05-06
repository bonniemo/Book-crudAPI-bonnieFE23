export type Book = {
  key: string;
  title: string;
  first_publish_year: number;
  author_name: string[];
  cover_i: string;
};

export type DisplayBookProps = {
  data: {
    docs: Book[];
  };
};

export type InitialStateTypes = {
  favouriteBooks: Book[];
  readBooks: Book[];
  favouriteAuthors: string[];
};

export type GlobalContextProviderProp = {
  children: React.ReactNode;
};

export type Action =
  | { type: "ADDFAVBOOK"; payload: Book }
  | { type: "REMOVEFAVBOOK"; payload: string };
