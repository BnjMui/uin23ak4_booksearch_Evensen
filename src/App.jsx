import { useState } from 'react'
import './App.css'

function App() {
  
  const [content, setContent] = useState([])
  async function fetchData(){
    try{
      const response = await fetch('https://openlibrary.org/search.json?q=jason+bond')
      const data = await response.json()
      setContent(data.results)
      console.log(content)
    }
      catch{
        console.error('damn cuh')
      }
      console.log(content)
    }


  fetchData()

  return (
    <>
    <nav>
      <label htmlFor='searchField'>Book search</label>
      <input id='searchField' type='search' placeholder='search...'></input>
    </nav>
    <main>
      {content?.map((i, key) =>{
        <article key={key}>
          <h2>{i.title}</h2>
        </article>
      })}
    </main>
    </>
  )
}

export default App
