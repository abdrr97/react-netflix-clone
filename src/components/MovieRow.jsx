import React, { useEffect, useState } from 'react'
import { Carousel } from '@trendyol-js/react-carousel'

const MovieRow = ({ title, items }) => {
  const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/w300'
  const [slides, setSlides] = useState(Math.floor(window.innerWidth / 145))
  const onWindowResize = () => {
    setSlides(Math.floor(window.innerWidth / 150))
  }

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)

    return () => window.removeEventListener('resize', onWindowResize)
  }, [])

  return (
    <>
      <article className='movieRow'>
        <h2 style={{ textDecoration: 'capitalize' }}>{title}</h2>
        <div className='movieRow--list'>
          <Carousel show={slides} slide={3} transition={0.5} swiping={true}>
            {items.map(({ poster_path }, idx) => (
              <div key={idx} className='movieRow--item'>
                <img src={`${API_IMAGE_PATH}${poster_path}`} alt='' />
              </div>
            ))}
          </Carousel>
        </div>
      </article>
    </>
  )
}

export default MovieRow
