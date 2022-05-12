import React from 'react';
import Film from './Film';

const FilmList =({films, onFilmClick}) => {
    
    const filmItems = films.map((film,index) => {
        return <Film film={film} key={index} onFilmClick={onFilmClick} />
    })

    return (
        <div>
            <ul>
                {filmItems}
            </ul>
        </div>
    )
}


export default FilmList;