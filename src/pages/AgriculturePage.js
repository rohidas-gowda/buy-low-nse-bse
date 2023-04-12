import React, { useState, useEffect } from "react";

function AgriculturePage() {
  const [agriculture, setAgriculture] = useState();

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbz7yJJ1oHysN3b-tpO4wxvpCiwbUXQMlOTfKGQ4qRcWU7HsqKLE1EPI5uCfmi-5mB3u/exec"
    )
      .then((response) => response.json())
      .then((data) => setAgriculture(data));
  }, []);

  return <div>{JSON.stringify(agriculture)}</div>;
}

export default AgriculturePage;
