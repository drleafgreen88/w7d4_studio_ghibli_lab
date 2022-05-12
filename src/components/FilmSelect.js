import React from 'react';

const FilmSelect = ({films, onFilmSelected}) => {

    const handleChange = function(event) {
        const chosenFilm = films[event.target.value];
        onFilmSelected(chosenFilm)
    }

    const filmOptions = films.map((film,index) => {
        return <option value={index} key={index}>{film.title}</option>
    })

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose Your Favourite Film</option>
            {filmOptions}
        </select>
    )

}



export default FilmSelect;