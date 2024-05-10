import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import BookDetails from "../../components/BookDetails";

const FavouriteBooks = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const handleRemoveFav = (key: string) => {
    dispatch({
      type: "REMOVEFAVBOOK",
      payload: key,
    });
  };
  console.log(state.favouriteBooks)
  return (
    <DisplayDataCardContainer>
      {state.favouriteBooks.map((book, index) => (
        <DisplayDataCard key={index}>
          <BookDetails {...book} />
          <button onClick={() => handleRemoveFav(book.key)}>delete</button>
        </DisplayDataCard>
      ))}
    </DisplayDataCardContainer>
  );
};

export default FavouriteBooks;
