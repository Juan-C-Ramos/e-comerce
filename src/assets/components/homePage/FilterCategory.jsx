import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import "./FilterCategory.css"

const FilterCategory = ({setFilterCategory}) => {
    const [categories, getCategories] = useFetch()

    useEffect(() => {
      const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories"
      getCategories(url)
    }, [])

    const selectOption = useRef()

    const handleChange = () => {
        setFilterCategory(selectOption.current.value)
    }
    const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)}
    


  return (
    <div>
      <div className="buttonOpen" onClick={handleClick}>
        <span> Filter by category</span>

      </div>
          {
           <div className='category__filter'>
            <button className='categoey__items' onClick={(() => setFilterCategory(""))}>All</button>
            {
              open ?
            
              categories?.map(category => {
                  return <button className='categoey__items' key={category.id} onClick={(() => setFilterCategory(category.id))}>{category.name}</button>
              })
              :null

            }
           </div> 
  
          }
    </div>
      
  )
}

export default FilterCategory
