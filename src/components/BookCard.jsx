export default function BookCard({content}){

return(
    <>
    {content?.map((element, index) => (
          <article key={index}>
              {element.isbn ? <img src={`https://covers.openlibrary.org/b/isbn/${element.isbn[0]}-M.jpg`} alt={element.title}  /> : <img src="https://placehold.co/180x300" alt="placeholder" />}
            <h3>"{element.title}"</h3>
            {element.isbn? <p>ISBN:{element.isbn[0]}</p> : <p>ISBN ikke tilgjengelig</p>}
            <p>{element.subtitle}</p>
          </article>
        ))}
    </>
)
}