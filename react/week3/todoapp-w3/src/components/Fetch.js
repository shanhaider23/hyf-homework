import React, { useEffect, useState } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <p>
            {" "}
            {item.description} <br />
            {item.deadline}
          </p>
        ))}
      </ul>
    </div>
  );
}
export default FetchAPI;
