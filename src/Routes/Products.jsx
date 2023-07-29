import React, { useState } from 'react'
import Carousels from '../Components/Carousels'
import Card from '../Components/Card'

const Products = () => {

  const movieList = [
    {id: 1, title: 'Blonde', img: "/images/blonde.jpeg"},
    {id: 2, title: 'The Batman', img: "/images/thebatman.jpeg"},
    {id: 3, title: 'Birdman', img: "/images/birdman.png"},
    {id: 4, title: 'Django Unchained', img: "/images/django.png"},
    {id: 5, title: 'The French Dispatch', img: "/images/thefrenchdispatch.jpeg"},
    {id: 6, title: 'Mad Max: Fury Road', img: "/images/madmax.png"},
    {id: 7, title: 'Nightmare Before Christmas', img: "/images/nightmareb4xmas.png"},
    {id: 8, title: 'Spider-man: Into the Spider-verse', img: "/images/spiderman.png"}
  ]

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const regex = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/

  const handleSubmit = (e) => {
    e.preventDefault()

    if(name.length > 4 && regex.test(email)){
      setMessage('Muchas gracias por escribirnos. Nos contactaremos a la brevedad con más información')
    }
    else{
      setMessage('Por favor, verifica que la información sea correcta')
    }
  }

  return (
    <div className='products'>
      <div className='home'>
        <div className='title'>
          <img src='/logo.jpeg' alt=''/>
          <h1>Elegimos fotogramas icónicos de películas y los convertimos en posters</h1>
        </div>
      </div>
      <section className='design-section1'>
        <h2>¿Cómo son nuestros diseños?</h2>
        <div className='sub-section1'>
          <div className='detail'>
            <p>[00:00:00]</p>
            <p>TIMECODE</p>
            <p>Es el momento exacto en que la imagen aparece en la película</p>
          </div>
          <div className='detail'>
            <p>DIR.</p>
            <p>Director/a de la película</p>
          </div>
          <div className='detail'>
            <p>DF.</p>
            <p>Director/a de fotografía</p>
          </div>
        </div>
      </section>
      <section className='design-section2'>
        <h2>Algunos ejemplos...</h2>
        <div className='card-grid'>
          {movieList.map(movie => <Card movie={movie} key={movie.id}/>)}
        </div>
      </section>
      <section className='design-section3'>
        <h3>¿Te gustaría ver opciones de otras películas?</h3>
        <h3>¡Escribinos!</h3>
        <form onSubmit={handleSubmit} className='form'>
          <label for='name'>Tu nombre y apellido:</label>
          <input type='text' name='name' onChange={(e) => setName(e.target.value)}/>
          <label for='email'>Tu mail:</label>
          <input type='email' name='email' onChange={(e) => setEmail(e.target.value)}/>
          <label for='comment'>Contanos de qué películas te gustaría ver posters:</label>
          <textarea name='comment'/>
          <button type='submit'>Enviar</button>
        </form>
        <h4>{message}</h4>
      </section>
    </div>
  )
}

export default Products