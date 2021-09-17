import React, { useEffect, useState } from 'react'
import { useDataContext } from '../hook/use-data'
import axios from 'axios'
import Header from '../components/Header'
const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/w300'

const Search = () => {
  const [seachedMovies, setSeachedMovies] = useState([])
  const [query, setQuery] = useState('')
  const { search } = useDataContext()

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    if (query) {
      const load = async () => {
        try {
          const { data } = await search(query, cancelToken)
          setSeachedMovies(data.results)
        } catch (error) {
          if (axios.isCancel(error)) return
        }
      }

      load()
    } else {
      setSeachedMovies([])
    }
    return () => cancelToken.cancel()
  }, [query])

  return (
    <>
      <Header />

      <main style={{ marginTop: '100px' }}>
        <div className='search--container'>
          <input
            placeholder='Search Here'
            autoFocus
            className='search--input'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type='text'
          />
        </div>
        <section className='list'>
          <article className='movieRow'>
            <div className='movieRow--listarea'>
              <div className='movieRow--list'>
                {seachedMovies
                  .filter((x) => x.poster_path)
                  .map((item, idx) => {
                    return (
                      <div key={idx} className='movieRow--item'>
                        <img src={`${API_IMAGE_PATH}${item.poster_path}`} alt='' />
                      </div>
                    )
                  })}
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Search
