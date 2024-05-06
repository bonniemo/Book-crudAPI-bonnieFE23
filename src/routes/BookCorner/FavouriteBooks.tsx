import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";

const FavouriteBooks = () => {
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state.favouriteBooks)

  const handleRemoveFav = (id: string) => {
    dispatch({
      type: "REMOVEFAVBOOK",
      payload: id,
    });
  };
  return (
    <>    
      FavouriteBooks
      {state.favouriteBooks.map((book, index) => (
        <section key={index}>
          <p>{book.title}</p>          
          <button onClick={() => handleRemoveFav(book.key)}>delete</button>
        </section>
      ))}
    </>
  );
};

export default FavouriteBooks;
