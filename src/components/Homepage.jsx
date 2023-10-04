import { useEffect, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";

const Homepage = () => {
  const [allData, setAllData] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [finalSalary, setFinalSalary] = useState();
  const budget = 2000;

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  const getSelectedPeople = (people) => {
    let isExist = selectedPeople.find(
      (singlePeople) => singlePeople.id == people.id
    );

    if (isExist) {
      return alert("Already Added");
    }
    console.log(selectedPeople);
    let initialSalary = parseInt(people.salary);
    let totalSalary = selectedPeople.reduce(
      (accumulator, person) => accumulator + parseInt(person.salary, 10),
      initialSalary
    );
    setFinalSalary(totalSalary);
    if (totalSalary > 2000) {
      return alert("Not Enough Budget");
    }

    setSelectedPeople([...selectedPeople, people]);
  };
  return (
    <div className="container flex p-20">
      <div className="cards w-8/12">
        <div className="border-2 border-red-200">
          <div className="grid grid-cols-3 gap-4 p-3">
            {allData.map((singleData) => (
              <Card
                key={singleData.id}
                singleData={singleData}
                buttonFunction={getSelectedPeople}
              ></Card>
            ))}
          </div>
        </div>
      </div>
      <div className="cart w-2/6">
        <Cart
          selectedPeople={selectedPeople}
          finalSalary={finalSalary}
          budget={budget}
        />
      </div>
    </div>
  );
};

export default Homepage;
