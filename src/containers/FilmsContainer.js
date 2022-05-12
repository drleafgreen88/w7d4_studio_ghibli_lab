import React, {useState, useEffect} from 'react';
import FilmList from '../components/FilmList';
import FilmDetails from '../components/FilmDetails';
import FilmSelect from '../components/FilmSelect';
import FavouriteFilms from '../components/FavouriteFilms';

const FilmsContainer = () => {
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [favouriteFilm, setFavouriteFilm] = useState([]);

    useEffect (() => {
        getFilms();
    }, [])

    const getFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then(res => res.json())
        .then(films => setFilms(films))
    }

    const onFilmClick = function(film){
        setSelectedFilm(film);
    }

    const onFilmSelected = function(selectedFilm){//, favourite) {
    //const onFilmSelected = event =>{
        // setSelectedFilm(film)
       // event.preventDefault();
        const favouriteFilmCopy = [...favouriteFilm]
        favouriteFilmCopy.push(selectedFilm)
        setFavouriteFilm(favouriteFilmCopy);
        //setFavouriteFilm(["dd"])
    }

    return(
        <div className ="main-container">
        <FilmList films={films} onFilmClick={onFilmClick} />
        <FilmSelect films={films} onFilmSelected={onFilmSelected} /> 
        {selectedFilm ? 
            <FilmDetails selectedFilm={selectedFilm} /> : 
            null}
        {favouriteFilm ?
            <FavouriteFilms favouriteFilm={favouriteFilm} />
            :
            null}  
        </div>
    )
}




export default FilmsContainer;