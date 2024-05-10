import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../assets/hooks/useFetch'
import ProductCard from '../assets/components/producs/ProductCard'
import "./styles/HomePage.css"
import FilterPrice from '../assets/components/homePage/FilterPrice.jsx'
import FilterCategory from '../assets/components/homePage/FilterCategory.jsx'

const HomePage = () => {
    const [products, getProducts, isLoading, hasError] = useFetch()
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products"
    const [filterName, setFilterName] = useState("")
    
    const [filterPrice, setFilterPrice] = useState({
      from: 0,
      to: Infinity
    })
    const [filterCategory, setFilterCategory] = useState("")

    const searchImput = useRef()
  
    useEffect(() => {
      getProducts(url)  
    }, [])



    const handleOnChange_Search = (event) => {
      event.preventDefault
      setFilterName(searchImput.current.value.toLowerCase().trim())
    }

    const ProductFilters = (product) => {
    const perName = product.title.toLowerCase().includes(filterName);
    
    const perPrice = +product.price >= filterPrice.from && +product.price <= filterPrice.to;

    const perCategory = filterCategory ? product.category.id === +filterCategory : product

    return perName && perPrice && perCategory;
  }; 
    
  
  return (
    <div>
      {isLoading ?
          <h1>Loading...</h1>
      
          : hasError?
            <h1>Somthing was worng</h1>
      
          : 
          <div className='homePage__container'>
            <div className='searchs'>
            <FilterCategory
              setFilterCategory={setFilterCategory}></FilterCategory>
              <FilterPrice
              setFilterPrice= {setFilterPrice}></FilterPrice>
            </div>
            <div className='products__results'>
            <div className='search__perName'>
                  <input className='input__name' onChange={handleOnChange_Search} ref={searchImput} type="text" placeholder='Search: "Samsung"' />
              </div>
            {
              products?.filter(ProductFilters).map(product =>
              <ProductCard
                key={product.id}
                product={product}
              ></ProductCard>
            )}
            </div>
          </div>
            
      }

    </div>
  )
}

export default HomePage;
