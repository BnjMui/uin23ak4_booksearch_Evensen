import { useEffect, useState } from "react"

export default function Search({setApiValue, setPage}){
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
        <h2>Leter du etter en book, søk her!</h2>
        <input type='search' id="search" name="search" placeholder='search...' onChange={handleChange}></input>
        <button type='button' onClick={handleSearch}>Search</button>
        </form>
        </>
    )
}