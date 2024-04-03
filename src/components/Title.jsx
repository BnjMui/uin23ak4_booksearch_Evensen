export default function Title({setApiValue}){
    return (
        <header>
            <h1 onClick={()=> setApiValue("James Bond")}>Boksøk</h1>
        </header>
    )
}