import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='black'>
        <div className='header--logo'>
          <a href='/'>
            <img
              src='https://www.pinclipart.com/picdir/big/2-23236_transparent-netflix-logo-2018-clipart.png'
              alt='Netflix'
            />
          </a>
        </div>
        <div className='header--user'>
          <Link to='/search'>
            <AiOutlineSearch fontSize='35' color='#ffffff' style={{ marginRight: '15px' }} />
          </Link>
          <Link to='/'>
            <img
              src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
              alt='Usuário'
            />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
