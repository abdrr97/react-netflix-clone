import React from 'react'

const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/w300'
const MovieRow = ({ title, items }) => {
  return (
    <>
      <article className='movieRow'>
        <h2>{title}</h2>
        <div className='movieRow--list'>
          {items.map(({ title, name, poster_path }, idx) => {
            return (
              <div key={idx} className='movieRow--item'>
                <img src={`${API_IMAGE_PATH}${poster_path}`} alt='' />
              </div>
            )
          })}
        </div>
      </article>
    </>
  )
}

export default MovieRow
