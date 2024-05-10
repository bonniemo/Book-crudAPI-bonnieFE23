import { Author } from "../types/Types";

const AuthorDetails: React.FC<Author> = ({
  key,
  name,
  birth_date,
  top_work,
  top_subjects,
}) => {
  return (
    <>
      <img
        src={`https://covers.openlibrary.org/a/olid/${key}-L.jpg`}
        alt="Author Photo"
        className="h-50 w-full object-cover rounded mb-4"
      />
      <p>{name}</p>
      <p>{key}</p>
      <p>Born: {birth_date}</p>
      <p>Top work: {top_work}</p>
      {/* <ul>
            Top subjects:
            {author.top_subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul> */}
    </>
  );
};
export default AuthorDetails;
