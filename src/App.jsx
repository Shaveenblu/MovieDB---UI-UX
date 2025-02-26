import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './components/Practice'
import Search from './Componenets/Search'
import Spinner from './Componenets/Spinner'

// 3 or 4
API_BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async() => {
    setIsLoading(true);
    setErrorMessage('');

    try{

      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const reponse = await fetch(endpoint, API_OPTIONS);
      if(!Response.ok){
        throw new Error('Failed to fetch movies');
      }

      const data  = await reponse.json();
      if(data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } catch(error) {
      console.error(`Error Fetching data: ${error}`);
      setErrorMessage('Error fethcing movies');
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className='pattern'></div>
        <div className='wrapper'>

          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
              Find <span className='text-gradient'>Movies</span> You will enjoy.
            </h1>

            <Search searchTerm={searchTerm} setSearchTerm={searchTerm}/>
          </header>


          <h1 className='text-white'>{searchTerm}</h1>
          <section className='all-movies'>
              <h2 className='mt-[40px]'>All movies</h2>

              {isLoading? (
                <Spinner>
                <p className='text-white'> Loading...</p>
              ) : errorMessage ? (
                <p className='text-red-500'>{ errorMessage }</p>
              ) : (
                <ul>
                  {movieList.map((movie) => {
                    <p key={movie.id} className='text-white'>
                      {movie.title}
                    </p> 
                  })}
                </ul>
              )}
          </section>
        </div>
    </main>
  )
}

export default App
