import React from 'react'
import { useHolyContext } from '../utils/global.context'
import Card from '../Components/Card'

const Carrito = () => {
  
  const {state, dispatch} = useHolyContext()


  return (
    <div className='cart'>
      <div className='card-grid'>
        {state.map(film => <Card key={film.id} movie={film} origin={true}/>)}
      </div>
      
    </div>
  )
}

export default Carrito