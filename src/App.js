import React, { useEffect, useState } from "react";

import "./App.css";
import Card from "./Card";

async function getGrantsData() {
  const dataURL = "https://www.sbir.gov/api/solicitations.json?keyword=sbir";

  try {
    const res = await fetch(dataURL, {
      headers: {
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

function App() {
  const [grantsData, setData] = useState([]);
  useEffect(() => {
    getGrantsData().then(setData);
  }, []);

  const favoriteItems = [];
  return (
    <div className="App">
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
