import React from 'react'
import { useHolyContext } from '../utils/global.context'

const Card = ({movie, origin}) => {

  const {state, dispatch} = useHolyContext()
  
  const addCart = () => {
   
    if(origin){
      dispatch({type: "REMOVE", payload: state.filter((mov) => mov.id != movie.id)})
    }
    else if(state.find((movCart) => movCart.id == movie.id)){
      document.querySelector('.cartButton').disabled = true;
      alert("Este poster ya fue agregado previamente al carrito")
    }
    else{
      dispatch({type: "ADD", payload: movie})
    }
  }
  
  return (
    <div className='card'>
        <img src={movie.img}/>
        <button className='cartButton' onClick={addCart}>{origin ? 'Eliminar del carrito' : 'Agregar al carrito'}</button>
    </div>
  )
}

export default Card