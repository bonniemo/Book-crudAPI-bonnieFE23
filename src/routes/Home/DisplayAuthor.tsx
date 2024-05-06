import { useContext } from "react";
import { GlobalContext } from "../../state/GlobalStateContext";
import { DisplayAuthorProps } from "../../types/Types";

const DisplayAuthor: React.FC<DisplayAuthorProps> = ({ data }) => {
  const docs = data.docs;
  const { dispatch } = useContext(GlobalContext);

  const handleAddFavAuthor = (
    key: string,
    name: string,
    birth_date: string,
    top_work: string,
    top_subjects: string[]
  ) => {
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
    <>
      {docs.map((author) => (
        <article key={author.key}>
          <p>{author.name}</p>
          <p>Born: {author.birth_date}</p>
          <p>Top work: {author.top_work}</p>
          {/* <ul>
            Top subjects:
            {author.top_subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul> */}
          <button
            onClick={() =>
              handleAddFavAuthor(
                author.key,
                author.name,
                author.birth_date,
                author.top_work,
                author.top_subjects
              )
            }
          >
            Add Fav
          </button>
        </article>
      ))}
    </>
  );
};

export default DisplayAuthor;
