import React from 'react'
import Carousels from '../Components/Carousels'

const Recomendations = () => {
  return (
    <div className='recom'>
      <div>
        <h3>Además de ofrecerte nuestros posters, te recomendamos películas para que disfrutes</h3>
      </div>
      <div className='divcarousel'>
        <Carousels/>
      </div>
    </div>
  )
}

export default Recomendations