import axios from "axios";
import { useState } from "react";
import getToken from "../utilities/getToken";


const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    const getData = (url) =>{
        axios.get(url)
            .then(res => {
              setError(false)
              setData(res.data)}) 
            .catch(err => setError(true))
            .finally(() => setLoading(false));
    }
    
    const getCart = (url, token) =>{
      axios.get(url, token)
      .then(res => {
        setError(false)
        setData(res.data)}) 
        .catch(err => setError(true))
            .finally(() => setLoading(false));
    }

    const addCart = (url, token,  data) =>{
        axios.post(url, data, token)
            .then(res => {
              setError(false)
              console.log(res.data)
              }) 
            .catch(err => {
              console.log(err)
             setError(true)})
            .finally(() => setLoading(false));
    } 
    const deleteCart = (url, token) =>{
        axios.delete(url, token)
            .then(res => {
              setError(false)
              console.log(res.data)}) 
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    } 
    const modifyCart = (url, data, token) =>{
        axios.put(url, data, token)
            .then(res => {
              setError(false)
              console.log(res.data)}) 
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    } 
    
    const postPurchases = (url, data) =>{
        axios.post(url, data, getToken())
            .then(res => {
              setError(false)
              setData(res.data)}) 
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }
    

  return [data, getData, loading, error, getCart, addCart, deleteCart, modifyCart, postPurchases]
}

export default useFetch
