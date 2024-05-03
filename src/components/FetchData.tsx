import { useFetch } from "../hooks/useFetch";

type Book = {
  title: string;
  first_publish_year: number;
  author_name: string[];
  cover_i: string;
};

const FetchData = ({ url }: { url: string }) => {
  const { data, loading, error } = useFetch<{ docs: Book[] }>(url);

  if (loading) {
    <p>Loading...</p>;
  }
  error && <p>Error: {error}</p>;

  return (
    <>
      {data && (
        <>
          {data.docs.map((book: Book) => (
            <>
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt=""
              />
              <p>{book.title}</p>
              <p>{book.author_name}</p>
              <p>{book.first_publish_year}</p>
            </>
          ))}
        </>
      )}
    </>
  );
};

export default FetchData;
