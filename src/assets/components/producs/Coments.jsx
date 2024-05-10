import React, { useEffect, useState } from 'react'
import getRandom from '../../utilities/getRandom'
import useFetch from '../../hooks/useFetch'
import usersReview from '../../json/usersReview.json'
import "./Coments.css"

const Coments = () => {
    const [coment, setcoment] = useState(getRandom(usersReview))

    const [imgUser, getImgUSer] = useFetch()
  
    useEffect(() => {
      const url = "https://randomuser.me/api/"
      getImgUSer(url)
    }, [])
  
  return (
    <div className='comment__container'>
    <div className='comment__img'>
        <img className='perfil___img' src={imgUser?.results[0].picture.thumbnail} alt="" />
    </div>
    <div className='comment__comment'>
        <h3>{coment.usuario}</h3>
        <p>{coment.reseña}</p>
    </div>
    </div>
  )
}

export default Coments
