import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";

const FavouriteBooks = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleRemoveFav = (key: string) => {
    dispatch({
      type: "REMOVEFAVBOOK",
      payload: key,
    });
  };
  return (
    <>    
      FavouriteBooks
      {state.favouriteBooks.map((book, index) => (
        <section key={index}>
          <p>{book.title}</p>  
          <p>{book.author_name}</p>        
          <button onClick={() => handleRemoveFav(book.key)}>delete</button>
        </section>
      ))}
    </>
  );
};

export default FavouriteBooks;
