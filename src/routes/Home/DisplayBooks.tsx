import { useContext, useState } from "react";
import { DisplayBookProps, Book } from "../../types/Types";
import { GlobalContext } from "../../state/GlobalStateContext";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import ReadBookForm from "./ReadBookForm";
import BookDetails from "../../components/BookDetails";

const DisplayBooks: React.FC<DisplayBookProps> = ({ data }) => {
  const docs = data.docs;
  const { dispatch } = useContext(GlobalContext);
  const [readFormVisibility, setReadFormVisibility] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const handleClick = (book: Book) => {
    dispatch({
      type: "ADDFAVBOOK",
      payload: {
        key: book.key,
        title: book.title,
        author_name: book.author_name,
        cover_i: book.cover_i,
        first_publish_year: book.first_publish_year
      },
    });
  };
  const handleAddRead = (book: Book) => {
    const { key, title, author_name, cover_i, first_publish_year } = book;
    setSelectedBook({ key, title, author_name, cover_i, first_publish_year });
    setReadFormVisibility(true);
  };
  return (
    <>
      <DisplayDataCardContainer>
        {docs.map((book: Book) => (
          <DisplayDataCard key={book.key}>
            <BookDetails {...book}/>
            <button onClick={() => handleClick({ key: book.key, title: book.title, author_name: book.author_name, cover_i: book.cover_i, first_publish_year: book.first_publish_year })}>Add Favourite</button>
            <button onClick={() => handleAddRead(book)}>Mark as Read</button>
          </DisplayDataCard>
        ))}
      </DisplayDataCardContainer>
      {readFormVisibility && selectedBook && (
        <ReadBookForm
          dataKey={selectedBook.key}
          title={selectedBook.title}
          author_name={selectedBook.author_name}
          cover_i={selectedBook.cover_i}
        />
      )}
    </>
  );
};

export default DisplayBooks;
