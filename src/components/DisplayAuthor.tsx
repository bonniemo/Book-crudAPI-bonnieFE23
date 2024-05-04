

const DisplayAuthor = ({ data }) => {
    const docs = data.docs;
  return (
    <>
        {docs.map((author, index) => (
            <article key={index}>
                <p>{author.name}</p>
                <p>{author.top_work}</p>
            </article>
        ))}
    </>
  )
}

export default DisplayAuthor