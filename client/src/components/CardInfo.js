import { height } from "@mui/system";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const CardInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/data");
      const data = await result.json();
      setData(data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        margin: "60px",
        height: "200%",
      }}
    >
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Cards
              name={item.name}
              position={item.position}
              text={item.text}
              description={item.description}
              likes={item.likes}
              views={item.views}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardInfo;
