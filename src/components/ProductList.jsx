import ProductCard from "./ProductCard";
import Error from './../utils/Error';
import Loader from './../utils/Loader';

export default function ProductList({data, loading, error}) {
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading && <Loader />}
            {error && <Error ref={toastId} dismiss={dismiss} />}
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
}