import { useEffect, useRef, useState } from "react";
import { useProducts } from "../context/ProductsProvider";
import SortSvg from "../svgs/SortSvg";
import useDropdown from "../hooks/useDropdown";

export default function Sort() {
  const [sortOptionsShow, setSortOptionsShow] = useState(false);
  const sortOptionsRef = useRef(null);
  const { isDropdownVisible, toggleDropdown, dropdownRef } = useDropdown();

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Sort
          <SortSvg />
        </button>
      </div>

      {/* Sort Options */}
      {isDropdownVisible && (
        <div
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          ref={dropdownRef}
        >
          <div className="py-1" role="none">
            <span
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              onClick={() => handleSort("lowToHigh")}
              id="menu-item-0"
            >
              Low to High
            </span>
            <span
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              onClick={() => handleSort("highToLow")}
              id="menu-item-1"
            >
              High to Low
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
