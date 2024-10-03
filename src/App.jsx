import { useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/movies'
import { useSearchMovies } from './hooks/search'
import debounce from 'just-debounce-it'

function App () {
  const { error, search, setSearch } = useSearchMovies()
  const { movies, getMovies, loading } = useMovies({ search })

  const debounceGetMovie = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleOnchange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovie(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleOnchange} value={search} placeholder='Avenger, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && (<p style={{ color: 'red', maxWidth: '350px', fontSize: '13px' }}>{error}</p>)}
      </header>
      <main>
        {loading ? (<p>Cargando...</p>) : (<Movies movies={movies} />)}
      </main>
    </div>
  )
}

export default App
