import React, { useState } from "react";
import axios from "axios";
import Recipes from "./components/Recipes";

const App = () => {
  const [alldata, setallData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://dummyjson.com/recipes?limit=6&select=name,image,prepTimeMinutes,ingredients,tags"
    );
    setallData(response.data.recipes);
  };
  return (
    <div className="recipes bg-amber-300 flex items-center justify-center flex-col">
      <button
        onClick={getData}
        className="cursor-pointer bg-green-500 px-3 py-2 mt-10"
      >
        Get Data
      </button>
      <div className="flex gap-5 items-center justify-evenly flex-wrap m-10">
        {alldata.map(function (elem, idx) {
          return (
            <div key={idx}>
              <Recipes elem={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
