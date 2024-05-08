import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import { Author, DisplayAuthorProps } from "../../types/Types";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import AuthorDetails from "../../components/AuthorDetails";

const DisplayAuthor: React.FC<DisplayAuthorProps> = ({ data }) => {
  const docs = data.docs;
  const { dispatch } = useContext(GlobalContext);

  const handleAddFavAuthor = (author: Author) => {
    dispatch({
      type: "ADDFAVAUTHOR",
      payload: {
        ...author,
      },
    });
  };
  return (
    <DisplayDataCardContainer>
      {docs.map((author) => (
        <DisplayDataCard key={author.key}>
          <AuthorDetails {...author} />
          <button onClick={() => handleAddFavAuthor(author)}>Add Fav</button>
        </DisplayDataCard>
      ))}
    </DisplayDataCardContainer>
  );
};
export default DisplayAuthor;
