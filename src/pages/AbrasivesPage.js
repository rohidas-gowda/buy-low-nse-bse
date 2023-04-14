import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import DisplaySector from "../components/DisplaySector";

function AbrasivesPage() {
  const [abrasives, setAbrasives] = useState([]);

  useEffect(() => {
    async function callGoogleSheetAPI() {
      const apiCall = await fetch(
        "https://script.google.com/macros/s/AKfycbz7yJJ1oHysN3b-tpO4wxvpCiwbUXQMlOTfKGQ4qRcWU7HsqKLE1EPI5uCfmi-5mB3u/exec"
      );
      const apiResponse = await apiCall.json();
      setAbrasives(apiResponse);
    }
    callGoogleSheetAPI();
  }, []);

  const result = Object.keys(abrasives).map((key) => abrasives[key]);

  var abrasives_stock = [];

  for(var i=0; i<result.length; i++){
    if(result[i].sector === 'abrasives'){
      abrasives_stock.push(result[i]);
    }
  }

  var stockInfo = (
    <table className="table-fixed border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="w-96 border border-gray-300">Stock Name</th>
          <th className="w-36 border border-gray-300">Current Price</th>
          <th className="w-36 border border-gray-300">Buy Price</th>
        </tr>
      </thead>
      <tbody>
        {
        abrasives_stock.map((stockDetails, index) => {
          return (
            <tr key={index}>
              <td className="text-center border border-gray-300">
                {stockDetails.stock_name}
              </td>
              <td className="text-center border border-gray-300">
                {stockDetails.stock_price}
              </td>
              <td className="text-center border border-gray-300">
                {stockDetails.buying_price}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <div>
      <Header />
      <DisplaySector message="Abrasives"/>
      <div>
        <div>{stockInfo}</div>
      </div>
    </div>
  );
}

export default AbrasivesPage;
