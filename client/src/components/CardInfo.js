import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const CardInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Cards title={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default CardInfo;
