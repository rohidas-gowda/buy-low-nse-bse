import React from "react";
import { Link } from "react-router-dom";

function Abrasives() {
  return (
    <div className="h-48 rounded-lg m-2 shadow-xl text-center border border-gray-300 hover:border-gray-800">
      <h2 className="text-2xl my-8 mx-4">Abrasives</h2>
      <Link to="/abrasives">
        <button className="bg-gray-400 p-2 w-32 rounded-lg my-2 font-semibold text-white">
          Check
        </button>
        </Link>
    </div>
  );
}

export default Abrasives;
