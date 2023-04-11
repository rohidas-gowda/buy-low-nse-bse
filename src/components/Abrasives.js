import React from "react";
import { Link } from "react-router-dom";

function Abrasives() {
  return (
    <div className="bg-gray-200 h-48 rounded-lg m-2 shadow-xl text-center">
      <h2 className="text-2xl my-8">Abrasives</h2>
      <Link to="/abrasives">
        <button className="bg-blue-500 p-2 w-32 rounded-lg my-2 font-semibold text-white">
          Check
        </button>
        </Link>
    </div>
  );
}

export default Abrasives;
