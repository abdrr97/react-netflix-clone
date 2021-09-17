import React from 'react'
import loader from '../assets/img/loader.svg'

const Loader = () => {
  return (
    <>
      <section id='splash-container'>
        <div id='splash-inner'>
          <img
            id='splash-logo'
            src='https://www.pinclipart.com/picdir/big/2-23236_transparent-netflix-logo-2018-clipart.png'
            alt='loading'
          />
          <img id='splash-loader' width='35' height='35' src={loader} alt='loading' />
        </div>
      </section>
    </>
  )
}

export default Loader
