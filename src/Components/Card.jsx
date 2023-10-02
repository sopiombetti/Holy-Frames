import React from 'react'
import { useHolyContext } from '../utils/global.context'

const Card = ({movie, origin}) => {

  const {state, dispatch} = useHolyContext()
  
  const addCart = () => {
   
    if(state.find((movFav) => movFav.id == movie.id)){
      dispatch({type: "REMOVE", payload: state.filter((mov) => mov.id != movie.id)})
    }
    else{
      dispatch({type: "ADD", payload: movie})
      alert('Poster agregado al carrito')
    }

  }
  
  return (
    <div className='flex flex-col '>
        <img className='w-[550px]' src={movie.img}/>
        <button className='text-sm bg-cyan-900 border w-[140px] p-1 mt-3 rounded-md text-white hover:cursor-pointer hover:bg-cyan-800 md:text-base md:w-[150px]' onClick={addCart}>{origin ? 'Eliminar del carrito' : 'Agregar al carrito'}</button>
    </div>
  )
}

export default Card