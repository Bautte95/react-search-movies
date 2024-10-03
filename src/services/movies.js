const API_KEY = '4287ad07'

export const searchMovies = async (search) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const responseJson = await response.json()
    const movies = responseJson.Search

    return movies?.map(movie => (
      {
        id: movie.imdbID,
        title: movie.Title,
        image: movie.Poster,
        year: movie.Year,
        type: movie.Type
      }
    )) || []
  } catch (error) {
    throw new Error(`Se presento un error al realizar la peticion: ${error.message}`)
  }
}
