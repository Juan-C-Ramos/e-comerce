import React, { useEffect } from "react";
import "./ProductCard.css";
import useFetch from "../../hooks/useFetch";
import getToken from "../../utilities/getToken";
import { Navigate, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const data = {
    quantity: 1,
    productId: product.id,
  };
  
  const [cart, noUsedd, loading, error, noUsed, addCart] = useFetch();
  
  const handleAddCart = () => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";
    addCart(url, getToken(), data);
  };
  

  
  
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div 
       className="product__container">
      <figure onClick={handleProductClick} className="images">
        <img
          className="product__image1"
          src={product.images[0].url}
          alt={product.title}
        />
        <img
          className="product__image2"
          src={product.images[1].url}
          alt={product.title}
        />
        
      </figure>
      <p>${product.price}</p>
      <h3>{product.title}</h3>
      <button className="product__button" onClick={handleAddCart}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
