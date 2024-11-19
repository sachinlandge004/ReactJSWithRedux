import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold  text-blue-600 mb-6 text-center">
            Welcome to User Module
          </h2>

          <h3 className="text-center text-3xl font-bold pt-7 pb-7">
            Existing Users{" "}
          </h3>
          <Link to="/login" className="ml-44">
            <button className="btn-primary">Login</button>
          </Link>

          <h3 className="text-3xl font-bold pt-10 text-center pt-7 pb-7">
            New Users{" "}
          </h3>
          <Link to="/register" className="ml-44">
            {" "}
            <button class="btn-primary">Register</button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
