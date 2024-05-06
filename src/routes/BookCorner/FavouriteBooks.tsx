import { useContext } from "react"
import { GlobalContext } from "../../state/GlobalStateContext"


const FavouriteBooks = () => {
  const { state } = useContext(GlobalContext)
  return (
    <>
    FavouriteBooks
    {state.favouriteBooks.map((book, index) => (
      <p key={index}>{book.title}</p>
    ))}
    </>
  )
}

export default FavouriteBooks