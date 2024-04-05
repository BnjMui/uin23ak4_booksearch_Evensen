import { useEffect, useState } from "react"
import MainTitle from "./MainTitle"
import Buttons from "./Buttons"
import BookCard from "./BookCard"

export default function SearchResults({apiValue, setApiValue, setPage, content, loading, handlePageChange, page, totalPages}){
    const [searchInput, setSearchInput] = useState("")

    const handleChange = function (element) {
        setSearchInput(element.target.value)
        
    }
    
    const handleSearch = function(e){
        e.preventDefault()
    if(searchInput.length >= 3){
        setApiValue(searchInput)
        setPage(1)
    }
    }

    return(
        <>
        <nav>
            <form onSubmit={handleSearch}>
            <p>Leter du etter en book, søk her!</p>
            <input type='search' id="search" name="search" placeholder='search...' onChange={handleChange}></input>
            <button type='button' onClick={handleSearch}>Search</button>
            </form>
        </nav>
        <main>
            <MainTitle apiValue={apiValue}/>
            <Buttons handlePageChange={handlePageChange} page={page} content={content} totalPages={totalPages} />
            <BookCard content={content} loading={loading}/>
            <Buttons handlePageChange={handlePageChange} page={page} content={content} totalPages={totalPages} />
        </main>
        </>
    )
}