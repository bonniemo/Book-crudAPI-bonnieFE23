import DisplayBooks from "../components/DisplayBooks";
import FetchData from "../components/FetchData";
import { useFormInput } from "../hooks/useFormInput";
import { useSearch } from "../hooks/useSearch";

const Home = () => {
  const baseUrl = "https://openlibrary.org/search.json?title=";
  // https://openlibrary.org/search/authors.json?q=j%20k%20rowling

  const searchInput = useFormInput("");
  const { handleClick, searchUrl } = useSearch(baseUrl, searchInput.value);

  const placeholder = "Title";

  return (
    <article className="bg-pink-300 p-1.5">
      <>
        <label className="mx-1.5" htmlFor="search">Search for a title</label>
        <input className="px-1.5 mx-1.5" type="text" placeholder={placeholder} {...searchInput} />
        <button className=" px-1 border border-black" onClick={handleClick}>Search</button>
      </>
      <FetchData componentProp={DisplayBooks} url={searchUrl} />
    </article>
  );
};

export default Home;
