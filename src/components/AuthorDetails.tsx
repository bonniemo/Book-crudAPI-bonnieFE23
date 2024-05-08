import { Author } from "../types/Types"

const AuthorDetails = ( author: Author ) => {
  return (
    <>
        <img
          src={`https://covers.openlibrary.org/a/olid/${author.key}-L.jpg`}
          alt="Author Photo"
          className="h-50 w-full object-cover rounded mb-4"        />
          <p>{author.name}</p>
          <p>{author.key}</p>
          <p>Born: {author.birth_date}</p>
          <p>Top work: {author.top_work}</p>
          {/* <ul>
            Top subjects:
            {author.top_subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul> */}
    </>
  )
}
export default AuthorDetails