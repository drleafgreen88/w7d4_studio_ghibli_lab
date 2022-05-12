import React from 'react';

const Film = ({film, onFilmClick}) => {

    const handleClick = function(){
        onFilmClick(film);
    }


    return <li onClick = {handleClick}>{film.title}</li>
}




export default Film;