import React from 'react';

const FilmDetails = ({selectedFilm}) => {
    return (

        <div>
            <h3>{selectedFilm.description}</h3>
        </div>
    )
}




export default FilmDetails;