import DisplayBooks from "../components/DisplayBooks";
import FetchData from "../components/FetchData";
import { useFormInput } from "../hooks/useFormInput";
import { useSearch } from "../hooks/useSearch";

const Home = () => {
  const baseUrl = "https://openlibrary.org/search.json?title=";
  // https://openlibrary.org/search/authors.json?q=j%20k%20rowling

  const searchInput = useFormInput("");
  const { handleClick, searchUrl } = useSearch(baseUrl, searchInput.value);

  return (
    <article className="bg-pink-300 p-1.5">
      <>
        <label htmlFor="search">Search</label>
        <input type="text" {...searchInput} />
        <button onClick={handleClick}>Search</button>
      </>
      <FetchData componentProp={DisplayBooks} url={searchUrl} />
    </article>
  );
};

export default Home;
