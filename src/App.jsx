import { useEffect, useState } from 'react'
import './styles/main.scss'
import BookCard from './components/BookCard'
import Buttons from './components/Buttons'

function App() {
  
  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState("")

  
  const getData = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=title:"James Bond"&fields=title,author_name,isbn&limit=21&page=${page}`)
      const data = await response.json()
      setContent(data.docs)
      const numFound = data.numFound || 0
      const itemsPerPage = 21
      const calculatedPages = Math.ceil(numFound / itemsPerPage)
      setTotalPages(calculatedPages)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    getData()
  },[page])
  
  const handlePageChange = function(p)  {
      setPage(page + p)
      window.scrollTo(0,0)
  }
  /*
  --------Gammel kode
  const getData =async()=>{
    const response = await fetch('https://openlibrary.org/search.json?q=title:James+Bond&fields=title,author_name,isbn&limit=20&page=1')
    const data = await response.json()
    setContent(data.docs)
    .catch(console.log(error))
    }

     Her fikk jeg litt hjelp av chatGPT ettersom jeg fikk en error med setContent i konsollen. Dette påvirket ikke resultatet i koden.
     Problemet var måten jeg forsøkte å skrive .catch på etter setContent i funksjonen min.
     Forutenom denne 'quick'fixen er alt annet gjort av meg. Parameterene i apiet er det jeg selv som har måtte finne ut av.
    */

  return (
    <>
    <header>
      <h1>Boksøk</h1>
    </header>
    <nav>
      <input type='search' placeholder='search...'></input>
      <button type='button'>Search</button>
    </nav>
    <main>
      <h2>James Bond bøker</h2>
      <Buttons handlePageChange={handlePageChange} page={page} content={content} totalPages={totalPages} />
      <BookCard content={content}/>
      <Buttons handlePageChange={handlePageChange} page={page} content={content} totalPages={totalPages} />
        
    </main>
    </>
  )
}

export default App
