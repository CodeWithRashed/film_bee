import { useEffect, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";

const Homepage = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  return (
    <div className="container flex p-20">
      <div className="cards w-8/12">
        <div className="border-2 border-red-200">
          <div className="grid grid-cols-3 gap-4 p-3">
            {allData.map((singleData) => (
              <Card key={singleData.id} singleData={singleData}></Card>
            ))}
          </div>
        </div>
      </div>
      <div className="cart w-2/6">
        <Cart />
      </div>
    </div>
  );
};

export default Homepage;