import { useCallback, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (previusSearch.current === search) return
    try {
      setError(null)
      setLoading(true)
      previusSearch.current = search
      const resultMovies = await searchMovies(search)
      setMovies(resultMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { getMovies, movies, loading, error }
}
