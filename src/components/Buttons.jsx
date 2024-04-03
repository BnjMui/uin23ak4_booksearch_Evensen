export default function Buttons({handlePageChange, page, totalPages}){

    return(
        <>
        <button id="prevButton" name='prev' onClick={() => handlePageChange(-1)} disabled={page === 1}>Previous</button>
        <button name='next' onClick={() => handlePageChange(+1)} disabled={page === totalPages}>Next</button>
        <p id="pageTotal">Side: {page} av {totalPages}</p>
        </>
    )
}