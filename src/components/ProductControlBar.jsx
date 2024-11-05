import Sort from "./Sort";
import Filter from "./Filter";
import Search from "./Search";
import Cart from "./Cart";

export default function ProductControlBar({cart}) {
  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="w-full">
          <Sort/>
          <Filter />
        </div>

        <div className="flex gap-2 items-center">
          <Search />
          <Cart cart={cart}/>
        </div>
      </div>
    </div>
  );
}
