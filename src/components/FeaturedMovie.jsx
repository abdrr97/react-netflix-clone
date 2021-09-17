import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'

const FeaturedMovie = (props) => {
  const { item } = props
  return (
    <>
      <section
        className='featured'
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}
      >
        <div className='featured--vertical'>
          <div className='featured--horizontal'>
            <div className='featured--name'>{item.original_name}</div>
            <div className='featured--info'>
              <div className='featured--points'>{item.vote_average} Points</div>
              <div className='featured--year'>{new Date(item.first_air_date).getFullYear()}</div>
              <div className='featured--seasons'>4 seasons</div>
              <div className='featured--description'>{item.overview}</div>

              <div className='featured--buttons'>
                <Link className='featured--watchbutton' to='/'>
                  <BsFillPlayFill /> Watch
                </Link>
                <Link className='featured--mylistbutton' to='/'>
                  <AiOutlineInfoCircle /> More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedMovie
