import { useState } from "react";
import FilterSvg from "../svgs/FilterSvg";
import useFetch from "../hooks/useFetch";
import { useProducts } from "../context/ProductsProvider";

export default function Filter() {
  const {selectedCategory, handleCategoryChange}=useProducts()
  const baseUrl = import.meta.env.VITE_API_URL;

  const { data, loading, error } = useFetch(`${baseUrl}/products/categories`);
  const [filterOptionsShow, setFilterOptionsShow] = useState(false);

  const handleFilterShow = ()=>{
    setFilterOptionsShow((prev)=>!prev)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="filter-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={handleFilterShow}
        >
          Filter
          <FilterSvg />
        </button>
      </div>
      {filterOptionsShow && (
        <div
          className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          id="filter-dropdown"
        >
          <div className="py-1" role="none">
            {
              data.map(category=><label key={category} className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4"
                  id="filter-option-1"
                  onChange={()=>handleCategoryChange(category)}
                  checked={selectedCategory === category}
                />
                <span className="ml-2">{category}</span>
              </label>)
            }
           
          </div>
        </div>
      )}
    </div>
  );
}
