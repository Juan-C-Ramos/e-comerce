import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./FilterPrice.css";

const FilterPrice = ({ setFilterPrice }) => {
  const { handleSubmit, register, reset } = useForm();
  
  const submit = (data) => {
    setFilterPrice({
      from: data.from || 0,
      to: data.to || Infinity,
    });
    reset({
      from: "",
      to: "",
    });
  };
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className="search__perPrice">
      <div className="buttonOpen" onClick={handleClick}>
        <span> Filter by price</span>
      </div>
      <button className=' separation'>All</button>
      {
        open ?
          <div className="filter__container">
            <form onSubmit={handleSubmit(submit)}>
              <div className="filter from">
                <label className="filter__item label" htmlFor="from">from</label>
                <input className="filter__item"
                  {...register("from")}
                  id="from"
                  type="number"
                  placeholder="Min Price"
                />
              </div>

              <div className="filter to">
                <label className="filter__item label" htmlFor="to">to</label>
                <input className="filter__item"
                  {...register("to")}
                  id="to"
                  type="number"
                  placeholder="Max Price"
                />
              </div>
              <button className="filter__button">Search</button>
            </form>
          </div>

        :null
      }
    </div>
  );
};

export default FilterPrice;
