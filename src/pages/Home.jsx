import React, { useEffect, useState } from 'react'
import FeaturedMovie from '../components/FeaturedMovie'
import Header from '../components/Header'
import Loader from '../components/Loader'
import MovieRow from '../components/MovieRow'
import { useDataContext } from '../hook/use-data'

const Home = () => {
  const { getHomeList } = useDataContext()
  const [movieList, setMovieList] = useState([])
  const [featuredMovie, setFeaturedMovie] = useState(null)

  useEffect(() => {
    const load = async () => {
      const list = await getHomeList()
      const originals = list.find((x) => x.slug === 'originals')
      const rand = Math.floor(Math.random() * originals?.items?.data?.results?.length - 1)

      const chosen = originals.items.data.results[rand]
      setFeaturedMovie(chosen)
      setMovieList(list)
    }

    load()
  }, [])

  return (
    <>
      <Header />

      {featuredMovie && <FeaturedMovie item={featuredMovie} />}
      {movieList.length > 0 && (
        <section className='list'>
          {movieList.map(({ title, items: { data } }, idx) => {
            return <MovieRow key={idx} title={title} items={data.results} />
          })}
        </section>
      )}

      {!movieList.length > 0 && <Loader />}
    </>
  )
}

export default Home
