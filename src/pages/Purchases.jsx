import React, { useEffect } from 'react'
import useFetch from '../assets/hooks/useFetch'
import getToken from '../assets/utilities/getToken'
import "./styles/Purchases.css"

const Purchases = () => {

  const [purchases, noUseed, loading, error, getData, noUsedd, noUssed, noUsseed, noUssedd] = useFetch()


  useEffect(() => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
    getData(url, getToken())
  }, [])
  
  return (
    <div className='cart__container'>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {purchases?.map(purchase => (
        <div className='purchases__card' key={purchase.id}>
          <p><span className='subtitle'>Purchase Id: </span><span>{purchase.id}</span></p>
          <p><span className='subtitle'>Brand: </span><span>{purchase.product.brand}</span></p>
          <p><span className='subtitle'>Product: </span><span>{purchase.product.title}</span></p>

          <img className='purchase__img' src={purchase.product.images[0].url} />
          <p><span className='subtitle'>Created: </span><span>{purchase.createdAt}</span></p>
          <p><span className='subtitle'>Quantity: </span><span>{purchase.quantity}</span></p>
          <p><span className='subtitle'>Price Unit: </span><span>{purchase.product.price}</span></p>
          <p><span className='subtitle'>Total Price: </span><span>{purchase.product.price * purchase.quantity}</span></p>
        </div>
      ))}

    </div>
  )
}

export default Purchases