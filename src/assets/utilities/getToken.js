import React from 'react'

const getToken = () => {

  return{
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  } 
}

export default getToken
