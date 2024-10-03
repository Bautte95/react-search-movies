export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0
  return (
    <>
      {
            hasMovies
              ? (
                <ul className='movies'>
                  {movies.map(movie => {
                    return (
                      <li key={movie.id} className='movie'>
                        <div className='movie-title'>
                          <h3>{movie.title}</h3>
                          <p>{movie.year}</p>
                        </div>
                        <img src={movie.image} alt={movie.title} />
                      </li>
                    )
                  })}
                </ul>
                )
              : (
                <p>No se encontraron datos de la busqueda.</p>
                )
          }
    </>
  )
}
