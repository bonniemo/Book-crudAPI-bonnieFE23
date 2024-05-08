import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import AuthorDetails from "../../components/AuthorDetails";


const FavouriteAuthors = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleRemoveFav = (key: string) => {
    dispatch({
      type: "REMOVE_FAV_AUTHOR",
      payload: key,
    })
  }

  return (
    <DisplayDataCardContainer>
      {state.favouriteAuthors.map((author, index) => (
        <DisplayDataCard key={index}>
          <AuthorDetails {...author}/>
          <button onClick={() => handleRemoveFav(author.key)}>Delete</button>
        </DisplayDataCard>
      ))}
    </DisplayDataCardContainer>
  )
}

export default FavouriteAuthors