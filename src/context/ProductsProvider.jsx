import { createContext, useContext, useReducer, useState } from "react";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";

const ProductsContext = createContext();

export default function ProductProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("lowToHigh");
    const baseUrl =
        import.meta.env.VITE_API_URL;
    const url = selectedCategory ?
        `${baseUrl}/products/category/${selectedCategory}` :
        `${baseUrl}/products`;

    const { data, loading, error } = useFetch(url);

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const sortedData = [...data].sort((a, b) =>
        sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price
    );

    const filteredData = sortedData.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

    const handleSort = (sort) => {
        console.log(sort)
        setSortOrder(sort);
    };

    const handleSearch = (search) => {
        setSearchTerm(search);
    };

    const handleCategoryChange = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };

    const state = {
        data,
        loading,
        error,
        searchTerm,
        selectedCategory,
        sortOrder,
        filteredData,
        handleSort,
        handleSearch,
        handleCategoryChange,
    };

    return ( <
        ProductsContext.Provider value = { state } > { children } <
        /ProductsContext.Provider>
    );
}

export const useProducts = () => {
    return useContext(ProductsContext);
};