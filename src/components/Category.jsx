export default function Category() {
  return (
    <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4"
        id="filter-option-1"
      />
      <span className="ml-2">Category 1</span>
    </label>
  );
}
