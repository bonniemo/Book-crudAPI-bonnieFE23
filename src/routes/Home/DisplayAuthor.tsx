import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import { Author, DisplayAuthorProps } from "../../types/Types";
import DisplayDataCard from "../../components/DisplayDataCard";
import DisplayDataCardContainer from "../../components/DisplayDataCardContainer";
import AuthorDetails from "../../components/AuthorDetails";

const DisplayAuthor: React.FC<DisplayAuthorProps> = ({ data }) => {
  const docs = data.docs;
  const { dispatch } = useContext(GlobalContext);

  const handleAddFavAuthor = ({
    key,
    name,
    birth_date,
    top_work,
    top_subjects,
  }: Author) => {
    dispatch({
      type: "ADDFAVAUTHOR",
      payload: {
        key: key,
        name: name,
        birth_date: birth_date,
        top_work: top_work,
        top_subjects: top_subjects,
      },
    });
  };
  return (
    <DisplayDataCardContainer>
      {docs.map((author) => (
        <DisplayDataCard key={author.key}>
          <AuthorDetails
            key={author.key}
            name={author.name}
            birth_date={author.birth_date}
            top_work={author.top_work}
            top_subjects={author.top_subjects}
          />
          <button
            onClick={() =>
              handleAddFavAuthor({
                key: author.key,
                name: author.name,
                birth_date: author.birth_date,
                top_work: author.top_work,
                top_subjects: author.top_subjects,
              })
            }
          >
            Add Fav
          </button>
        </DisplayDataCard>
      ))}
    </DisplayDataCardContainer>
  );
};
export default DisplayAuthor;
