import React, { useEffect, useState } from 'react'
import useAuth from '../assets/hooks/useAuth.js'
import { useDispatch, useSelector } from 'react-redux'
import getToken from '../assets/utilities/getToken.js'
import useFetch from '../assets/hooks/useFetch.js'
import ProductInCart from '../assets/components/cart/ProductInCart.jsx'
import "./styles/Cart.css"

const Cart = () => {

  const [cart, noUsed, isLoading, hasError, getCart, noUssed, deleteCart, modifyQuantity, postPurchases] = useFetch()
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart"
    getCart(url, getToken())
    console.log(cart)
    setIsDeleted(false)
  }, [isDeleted])

  const handlePurchases = () => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
    postPurchases(url, cart)
    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  }
  
  return (
    <div>

      <div className='cart__container'>
        {
          isLoading ? <h2>Loading...</h2> : null
        }
        {
          cart?.map(product => <ProductInCart 
            key={product.id} 
            product={product} 
            setIsDeleted={setIsDeleted}/>)
        }


      </div>
        {
          cart ?
          <div className='purchase__button'>
            <button className='button__purchase' onClick={handlePurchases}>Purchase</button>
          </div> 
          : null

        }
    </div>
  )
}

export default Cart