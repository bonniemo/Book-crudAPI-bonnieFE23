import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";


const FavouriteAuthors = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleRemoveFav = (key: string) => {
    dispatch({
      type: "REMOVE_FAV_AUTHOR",
      payload: key,
    })
  }

  return (
    <>
      {state.favouriteAuthors.map((author, index) => (
        <section key={index}>
          {author.name}
          <button onClick={() => handleRemoveFav(author.key)}>Delete</button>
        </section>
      ))}
    </>
  )
}

export default FavouriteAuthors