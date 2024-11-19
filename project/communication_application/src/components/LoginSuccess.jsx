import React from "react";
import Tabs from "./Tabs";



function LoginSuccess() {

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-7xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Login Successful
          </h2>

            <h2 className="text-xl mb-6 text-center"> Welcome ! user</h2>

          <Tabs />
        </div>
      </div>
    </>
  );
}

export default LoginSuccess;
