import { useEffect, useState } from 'react'
import './styles/main.scss'
import BookCard from './components/BookCard'
import Buttons from './components/Buttons'
import Title from './components/Title'

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
  
  //Funksjon for å bytte til neste side.
  const handlePageChange = function(p)  {
      setPage(page + p)
      window.scrollTo(0,0)
  }
 

  return (
    <>
    <Title />
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
