import './App.css'
import { useEffect, useState } from 'react';
import { latestMovie } from './assets/apiCall';
import { FilmCard } from './FilmCard/FilmCard';

function App() {
  const [films, setFilms] = useState([]);

  // useEffect(() => {
  //   if (films.length === 0) {
  //     latestMovie()
  //       .then((results) => {
  //         setFilms(results.data.results);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }, [films])

  // const bringFilms = async () => {
  //   try {
  //     const response = await latestMovie();
  //     setFilms(response.data.results);
  //   } catch (error) {

  //   }
  // } 
  
  useEffect(() => {
    async function fetchData() {
      if (films.length === 0) {
        try {
          const response = await latestMovie();
          setFilms(response.data.results);
        } catch (error) {
          console.log(response.error);
        }
      }
    }
  
    fetchData();
  
  }, [films]);
  

  return (
    <div className='filmsContainer'>
      {/* <button onClick={bringFilms}>Mi boton</button> */}
      {films.length > 0 ? (
        <div className='filmRoster'>
          {films.map((film) => {
            return (
              <FilmCard
                key={film.id}
                title={film.title}
                original_title={film.original_title}
                overview={film.overview}
                poster_path={film.poster_path}
              />
            );
          })}
        </div>
      ) : (
        <div>Esperando las películas por defecto</div>
      )}
    </div>
  )
}

export default App;
