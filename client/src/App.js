import React, { useEffect, useState } from "react";
// import axios from "axios";

import "./App.css";
import Card from "./Card";
import Button from "./Button";

async function getGrantsData() {
  const dataURL = "https://www.sbir.gov/api/solicitations.json?keyword=sbir";

  try {
    const res = await fetch(dataURL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const grantsData = await res.json();

    return grantsData;
  } catch (err) {
    console.log(`Network Error. ${err}`);
  }
}

// const getData = () => {
//   return axios
//     .get("https://www.sbir.gov/api/solicitations.json?keyword=sbir")
//     .then((res) => console.log(res.data));
// };

function App() {
  const [grantsData, setData] = useState([]);
  useEffect(() => {
    getGrantsData().then(setData);
  }, []);

  const favoriteItems = [];
  return (
    <div className="App">
      <Button favoriteItems={favoriteItems}></Button>
      {grantsData.map((data) => (
        <Card
          key={data.solicitation_number}
          data={data}
          favoriteItems={favoriteItems}
        ></Card>
      ))}
    </div>
  );
}

export default App;
