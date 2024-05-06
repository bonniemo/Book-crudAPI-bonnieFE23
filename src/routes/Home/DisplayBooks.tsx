import { useContext } from "react";
import { DisplayBookProps, Book } from "../../types/Types";
import { GlobalContext } from "../../state/GlobalStateContext";

const DisplayBooks: React.FC<DisplayBookProps> = ({ data }) => {
  const docs = data.docs;
  const { dispatch } = useContext(GlobalContext);

  const handleClick = (title: string, author_name: string[], first_publish_year: number, cover_i: string) => {
    dispatch({
      type: "ADDFAVBOOK",
      payload: {
        title: title, 
        author_name: author_name, 
        first_publish_year: first_publish_year, 
        cover_i: cover_i
      }
    })
  }

  return (
    <>
      {docs.map((book: Book, index: number) => (
        <article key={index}>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt=""
          />
          <p>{book.title}</p>
          <p>{book.author_name}</p>
          <p>{book.first_publish_year}</p>
          <button onClick={() => handleClick(book.title, book.author_name, book.first_publish_year, book.cover_i)}>Add Favourite</button>
        </article>
      ))}
    </>
  );
};

export default DisplayBooks;
