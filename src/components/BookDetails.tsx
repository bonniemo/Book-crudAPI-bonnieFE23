import { Book } from "../types/Types"

const BookDetails = ( book:Book ) => {
  return (
    <>
        <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt=""
            />
            <p className=" mt-3">{book.title}</p>
            <p>{book.author_name}</p>
            <p>{book.first_publish_year}</p>   
    </>
  )
}

export default BookDetails