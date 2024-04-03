export default function BookCard({content, loading}){
  const handleNavigate = function(){

  }
return(
    <>
    {loading ? (
      <p id="loading">Loading...</p>
    ):
    content?.map((element, index) => (
          <article key={index}>
              {element.isbn ? <img src={`https://covers.openlibrary.org/b/isbn/${element.isbn[0]}-M.jpg`} alt={element.title}  /> : <img src="https://placehold.co/180x300" alt="placeholder" />}
            <h3>"{element.title}"</h3>
            <p>Forfatter: {element.author_name}</p>
            <p>Første publikasjon: {element.first_publish_year}</p>
            <p>Rating: {element.ratings_average ? (element.ratings_average).toFixed(1): "Rating not available"}</p>
            {element.isbn? <p>ISBN:{element.isbn.length===13? element.isbn[0]: element.isbn[1]}</p> : <p>ISBN ikke tilgjengelig</p>}
            <a target="_blank" href={`https://www.amazon.com/s?k=${element.isbn? element.isbn[0] : false}`}>Finn på Amazon</a>
          </article>
        ))
    }
    
    </>
)
}