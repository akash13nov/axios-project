import React, { useEffect, useState } from "react";
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
  useEffect(function () {
    getData();
  }, []);
  return (
    <div className="bg-amber-300 p-10">
      <h1 className="text-4xl text-white bg-[#396ddf] text-center font-extrabold p-2 uppercase">
        Food Recipes
      </h1>
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
