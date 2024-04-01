export default function Content({content}){

    console.log("Content er ", content)
return(
    <>
    {content?.map((element, index) => (
          <article key={index}>
              <img src={`https://covers.openlibrary.org/b/isbn/${element.isbn[0]}-M.jpg`}
              alt={element.title} 
              />
            <h3>"{element.title}"</h3>
            <p>ISBN:{element.isbn[0]}</p>
            <p>{element.subtitle}</p>
          </article>
        ))}
    </>
)
}