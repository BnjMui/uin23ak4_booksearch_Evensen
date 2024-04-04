import { useEffect, useState } from "react"

export default function SearchResults({setApiValue, setPage}){
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
        <form onSubmit={handleSearch}>
        <p>Leter du etter en book, søk her!</p>
        <input type='search' id="search" name="search" placeholder='search...' onChange={handleChange}></input>
        <button type='button' onClick={handleSearch}>Search</button>
        </form>
        </>
    )
}