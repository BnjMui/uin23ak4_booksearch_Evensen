import { useEffect, useState } from 'react'
import BookCard from './components/BookCard'
import Buttons from './components/Buttons'
import Title from './components/Title'
import Footer from './components/Footer'
import MainTitle from './components/MainTitle'
import SearchResults from './components/SearchResults'

function App() {
  
  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState("")
  const [apiValue, setApiValue] = useState("James Bond")
  const [loading, setLoading] = useState(true)
  
  const getData = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=title:"${apiValue}"&fields=title,author_name,isbn,first_publish_year,ratings_average&limit=12&page=${page}`)
      const data = await response.json()
      setContent(data.docs)
      setLoading(false)
      const numFound = data.numFound || 0
      const itemsPerPage = 21
      const calculatedPages = Math.ceil(numFound / itemsPerPage)
      setTotalPages(calculatedPages)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    document.getElementById("search").value=""
    setLoading(true)
    getData()
  },[apiValue, page])
  //Funksjon for å bytte til neste side.
  const handlePageChange = function(p)  {
      setPage(page + p)
      window.scrollTo(0,0)
  }
 

  return (
    <>
      <Title setApiValue={setApiValue} setPage={setPage}/>
      <SearchResults setApiValue={setApiValue} setPage={setPage} content={content} loading={loading} apiValue={apiValue} handlePageChange={handlePageChange} page={page} totalPages={totalPages}/>
      <Footer/>
    </>
  )
}

export default App
