export default function Title({setApiValue, setPage}){
    return (
        <header>
            <h1 onClick={()=> { setApiValue("James Bond"); setPage(1)}}>Boksøk</h1>
        </header>
    )
}