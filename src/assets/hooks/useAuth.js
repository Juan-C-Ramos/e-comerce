import axios from 'axios';
import React, { useState } from 'react'

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const [data, setData] = useState();

  
  const postData = (url, data) =>{
      axios.post(url, data)
          .then(res => {
            setLoading(true);
            "token" in res.data && localStorage.setItem("token",res.data.token);
            console.log(res.data)
            setError(false)
          console.log(res.data)}) 
          .catch(err => setError(true))
          .finally(() => setLoading(false));
  } 

  return [postData, loading, error]
}

export default useAuth