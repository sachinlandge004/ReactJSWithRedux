import React from "react";
import Welcome from "./Welcome";
function Logout() {
  return (
    <>
      <div style={{ height: 750 }}>
        <Welcome />
      </div>
      <div style={{ width: 2040 }}>
        <h2 className="text-2xl font-bold  text-black-600 mb-6 text-center top-0.5">
          You have been logged out successfully
        </h2>
      </div>
    </>
  );
}

export default Logout;
