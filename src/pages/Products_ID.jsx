import React, { useEffect, useState } from "react";
import getRandom from "../assets/utilities/getRandom";
import usersReview from "../assets/json/usersReview.json";
import useFetch from "../assets/hooks/useFetch";
import Coments from "../assets/components/producs/Coments";
import { useParams } from "react-router-dom";
import getToken from "../assets/utilities/getToken";
import "./styles/Products_ID.css"

const Products_ID = () => {
  const coments = [1, 2, 3];
  const param = useParams();
  const [
    product,
    getProduct,
    isLoading,
    hasError,
    getCart,
    addCart,
    deleteCart,
    modifyCart,
    postPurchases,
  ] = useFetch();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`;
    getProduct(url);
  }, []);

  const handleAddCart = () => {
    const data = {
      quantity: quantity,
      productId: +param.id,
    };
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";
    addCart(url, getToken(), data);
    setQuantity(1);
  };

  const handleQuantityPlus = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };
  const handleQuantityMinus = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="productsId">
      <div className="productsId__header">
        
        <div>
          <h1 className="productsId__title">{product?.title}</h1>
          <img className="productsId__img" src={product?.images[0].url} alt={product?.name} />
        </div>

        <div className="productsId__description">
          <p>{product?.description}</p>
          <div className="productsId__prices">
            <p>Price: ${product?.price}</p>
            <p>Total Price: ${product?.price * quantity}</p>

          </div>
          
          <div className="productsId__buttons">
            <div>
              <button className="productsId__buttons__items" onClick={handleQuantityMinus}>-1</button>
              <button className="productsId__buttons__show">||{quantity}||</button>
              <button className="productsId__buttons__items" onClick={handleQuantityPlus}>+1</button>
            </div>
            <button className="productsId__buttons__items" onClick={handleAddCart}>Add to cart</button>
          </div>
        </div>

        <hr />
      </div>
      <div className="comments__container">
        <h2 className="comments__title">Comments</h2>
        {coments.map((coment) => {
          return <Coments key={coment}></Coments>;
        })}
      </div>
    </div>
  );
};

export default Products_ID;
