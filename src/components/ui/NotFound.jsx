import emptyLogo from "../../assets/empty.svg";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center p-8 bg-white rounded-lg max-w-md">
        <img src={emptyLogo} alt="Not found" className="mx-auto w-24 h-24 mb-4" />

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Product List is empty!
        </h1>

        <p className="text-gray-600">
          The products you're looking for could not be found.
        </p>
      </div>
    </div>
  );
}

