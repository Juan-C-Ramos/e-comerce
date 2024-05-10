import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import getToken from '../../utilities/getToken'
import "./ProductInCart.css"

const ProductInCart = ({product, setIsDeleted}) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${product.id}`
    
    const [NoUssed, noUssed, loading, error, noUseed, noUsed, deleteCart, modifyQuantity, postPurchases] = useFetch()

    const [quantity, setQuantity] = useState(product.quantity)
    const handleQuantityPlus = () => {
      const newQuantity = quantity + 1
        setQuantity(newQuantity)
        console.log(quantity)
        modifyQuantity(url, {quantity: newQuantity}, getToken())
    }
    const handleQuantityMinus = () => {
      const newQuantity = quantity -1
        setQuantity(newQuantity)
        console.log(quantity)
        modifyQuantity(url, {quantity: newQuantity}, getToken())
    }

    const handleDelete = () => {
        deleteCart(url, getToken())
        setIsDeleted(true)
    }

    const handleProductClick = () => {
        console.log("get over here...")
    }
  return (
    <div className='ProductInCart__cart' onClick={handleProductClick}>
      <figure>
        <img className='ProductInCart__img' src={product.product.images[0].url}/>
      </figure>
      <h3>{product.product.title}</h3>
      <span> Cantidad: {quantity}</span>
      <hr />
      <div className='ProductInCart__buttons'>
        <button className='ProductInCart__button' onClick={handleDelete}> Delete</button>
        <hr />
        <button className='ProductInCart__button' onClick={handleQuantityMinus}>-1</button>
        <span>||{quantity}||</span>
        <button className='ProductInCart__button' onClick={handleQuantityPlus}>+1</button>
      </div>
      <hr />
    </div>
  )
}

export default ProductInCart
