import { useEffect, useRef, useState } from 'react'

export const useSearchMovies = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      if (isFirstInput.current) return
    }
    if (search === '') { setError('No se puede realizar una busqueda sin datos'); return }
    if (search.match(/^\d+$/)) { setError('No se puede realizar una busqueda con numeros'); return }
    if (search.length < 3) { setError('El dato ingresado debe contener al menos 3 caracteres'); return }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
