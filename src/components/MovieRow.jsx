import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel'

const MovieRow = ({ title, items }) => {
  const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/w300'

  return (
    <>
      <article className='movieRow'>
        <h2>{title}</h2>
        <div className='movieRow--list'>
          <Carousel show={16} slide={2} transition={0.5} swiping={true}>
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
