import { useEffect, useState } from "react"

export default function Search({setApiValue, setPage}){
    const [searchInput, setSearchInput] = useState("")
    const [search, setSearch] = useState("")

    const handleChange = function (element) {
        setSearchInput(element.target.value)
        
    }
    
    const handleSearch = function(){
    if(searchInput.length >= 3){
        setApiValue(searchInput)
        setPage(1)
        console.log(`handleSearch funksjonen har kjørt`)
    }
    }

    return(
        <>
        <h2>Leter du etter en book, søk her!</h2>
        <input type='search' id="search" name="search" placeholder='search...' onChange={handleChange}></input>
        <button type='button' onClick={handleSearch}>Search</button>
        </>
    )
}