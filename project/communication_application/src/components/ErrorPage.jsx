import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
        <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-4xl mb-6 text-red-500">
            Opps! Something went wrong
          </h2>

          <Link to="/">
            <h2 className="text-xl pt-4 underline text-blue-500">
              click here to return to home page
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}
