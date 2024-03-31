export default function Content({content}){

    console.log("Content er ", content)
return(
    <>
    <h2>Dette er bøker?</h2>
    {content?.map(element => 
        <article key={element.key}>
          <h2>"{element.title}"</h2>
          {console.log(element.title)}
        </article>
        )}
    </>
)
}