import React from "react";

const GenreSelector = ({setGenre}) => {

    const handleChange = (event) => {
        setGenre(event.target.value)
    }

    return (
        <>
            <select id="genre-select" onChange={handleChange}>
                <option value="all" >Select Option</option>
                <option value="all" >All</option>
                <option value="rock" >Rock</option>
                <option value="dance" >Dance</option>
                <option value="country" >Country</option>
            </select>
        </>
    )
}

export default GenreSelector;