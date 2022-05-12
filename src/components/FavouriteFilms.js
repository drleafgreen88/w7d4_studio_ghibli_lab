import React from 'react';
import Film from './Film';

const FavouriteFilms = ({favouriteFilm}) => {

    const favouritesItems = favouriteFilm.map((film,index) => {
        return <Film film={film} key={index} />
    })

    return (
        <div>
            <ul>
                {favouritesItems}
            </ul>
        </div>
    )
}




export default FavouriteFilms;