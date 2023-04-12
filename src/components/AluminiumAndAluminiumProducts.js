import React from "react";
import { Link } from "react-router-dom";

function AluminiumAndAluminiumProducts() {
  return (
    <div className="h-48 rounded-lg m-2 shadow-xl text-center border border-gray-300 hover:border-gray-800">
      <h2 className="text-2xl my-8 mx-4">Aluminium & Aluminium Products</h2>
      <Link to="/abrasives">
        <button className="bg-blue-500 p-2 w-32 rounded-lg my-2 font-semibold text-white">
          Check
        </button>
      </Link>
    </div>
  );
}

export default AluminiumAndAluminiumProducts;