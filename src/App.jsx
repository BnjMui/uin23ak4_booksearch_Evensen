import { useEffect, useState } from 'react'
import './App.css'
import Content from './components/Content'

function App() {
  
  const [content, setContent] = useState([])

  const getData =async()=>{
    const response = await fetch('https://openlibrary.org/search.json?q=title:%22James+Bond%22&fields=title,author_name&limit=20&page=1')
    const data = await response.json()
    setContent(data.docs)
    }

  useEffect(()=>{
    getData()
  },[])

  console.log(content)

  return (
    <>
    <nav>
      <input type='search' placeholder='search...'></input>
      <button type='button'>Search</button>
    </nav>
    <main>
    <h2>Jason Bond bøker</h2>
    {content?.map(element => 
        <article key={element.key}>
          <h3>"{element.title}"</h3>
          <img/>
          <p>{element.subtitle}</p>
          {console.log(element.title)}
        </article>
        )}
    </main>
    </>
  )
}

export default App
