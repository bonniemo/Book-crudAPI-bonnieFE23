import { useState } from "react";
import FetchData from "../components/FetchData";
import { useFormInput } from "../hooks/useFormInput";
import DisplayBooks from "../components/DisplayBooks";

const Home = () => {
  const baseUrl = "https://openlibrary.org/search.json?title=";  

  const [searchUrl, setSearchUrl] = useState("");
  const searchInput = useFormInput("");

  const handleClick = () => {
    const formatedInput = searchInput.value.replace(/ /g, "+");
    const searchUrl = `${baseUrl}${formatedInput}&limit=5&offset=3`;
    setSearchUrl(searchUrl);
  };
  console.log(searchUrl);

  return (
    <div className="h-screen bg-pink-300 p-1.5">
      <h1 className="">Hello BookWorld</h1>
      <>
        <label htmlFor="search">Search</label>
        <input type="text" {...searchInput} />
        <button onClick={handleClick}>Search</button>
      </>
      <FetchData componentProp={DisplayBooks} url={searchUrl} />
    </div>
  );
};

export default Home;
