import React, { useState, useEffect } from "react";
import Header from "../components/Header";

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
        {result.map((stockDetails, index) => {
          return (
            <tr key={index}>
              <td className="text-center border border-gray-300">
                {stockDetails.stock_name}
              </td>
              <td className="text-center border border-gray-300">
                {stockDetails.stock_price.toFixed(2)}
              </td>
              <td className="text-center border border-gray-300">
                {stockDetails.buying_price.toFixed(2)}
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
      <div>
        <div>{stockInfo}</div>
      </div>
    </div>
  );
}

export default AbrasivesPage;
