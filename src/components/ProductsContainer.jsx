import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useProducts } from "../context/ProductsProvider";
import Error from "./ui/Error";
import Loader from "./ui/Loader";
import ProductCard from "./ProductCard";
import ProductControlBar from "./ProductControlBar";
import ProductsHeading from "./ProductsHeading";
import NotFound from "./ui/NotFound";

export default function ProductsContainer() {
  const { loading, error, filteredData } = useProducts();
  const [cart, setCart] = useState([]);

  const handleCartClick = useCallback((id, isAdded) => {
    const toastMessage = isAdded
      ? `Product with id "${id}" is removed from Cart successfully!`
      : `Product with id "${id}" is added to Cart successfully!`;
  
    setCart((prevCart)=>
      isAdded
        ? prevCart.filter((item) => item !== id)
        : [...prevCart, id]
    );
  
    // Show the toast message after cart update
    if (isAdded) {
      toast.error(toastMessage, { position: "top-center" });
    } else {
      toast.success(toastMessage, { position: "top-center" });
    }
  }, []);
  

  const isEmpty = !loading && !error && filteredData.length === 0;

  return (
    <div className="pt-16 sm:pt-24 lg:pt-40">
      <ProductsHeading />
      <ProductControlBar cart={cart} />

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {error && <Error message={error} />}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading && <Loader />}
            {!loading &&
              !error &&
              filteredData.length > 0 &&
              filteredData.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  cart={cart}
                  onCartClick={handleCartClick}
                />
              ))}
          </div>

          {isEmpty && <NotFound />}
        </div>
      </div>
    </div>
  );
}
