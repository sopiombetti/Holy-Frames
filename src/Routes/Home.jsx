import React, { useState } from 'react'
import Carousels from '../Components/Carousels'
import Card from '../Components/Card'

const Home = () => {

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
    <div className=''>
      <div className='bg-violet-200 py-5'>
        <div className='flex flex-col space-y-3 items-center md:flex-row md:justify-around md:items-center md:px-3'>
          <img className='w-[150px] rounded-xl border-black border-2 shadow-md shadow-black md:w-[250px]' src='/logo.jpeg' alt=''/>
          <h1 className='text-2xl font-bold leading-relaxed text-center drop-shadow-2xl text-cyan-900 w-3/4 md:w-1/2 lg:w-5/12 md:text-4xl md:leading-relaxed md:text-left'>Elegimos fotogramas icónicos de películas y los convertimos en posters.</h1>
        </div>
      </div>
      <section className='flex flex-col items-center my-5'>
        <h2 className='text-black border-2 border-cyan-900 rounded-md p-2 m-3 text-center'>¿Cómo son nuestros diseños?</h2>
        <div className='w-10/12 flex flex-col space-y-3 items-center pt-3 lg:w-11/12 lg:flex-row lg:justify-around lg:items-center'>
          <div className='w-7/12 h-[130px] lg:w-[200px] lg:h-[170px] detail'>
            <p className='text-center'>Título y año de la película</p>
          </div>
          <div className='w-7/12 h-[170px] lg:w-[200px] detail'>
            <p>[00:00:00]</p>
            <p className='text-center'>TIMECODE</p>
            <p className='text-center'>Es el momento exacto en que la imagen aparece en la película</p>
          </div>
          <div className='w-7/12 h-[130px] lg:w-[200px] lg:h-[170px] detail'>
            <p className='text-center'>DIR.</p>
            <p className='text-center'>Director/a de la película</p>
          </div>
          <div className='w-7/12 h-[130px] lg:w-[200px] lg:h-[170px] detail'>
            <p className='text-center'>DF.</p>
            <p className='text-center'>Director/a de fotografía</p>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center bg-indigo-300 py-5'>
        <h2 className='mb-5 font-semibold'>¡Elegí los posters que más te gusten!</h2>
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

export default Home