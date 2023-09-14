import PropTypes from "prop-types";

const Cart = ({ selectedPeople, finalSalary, budget }) => {
  return (
    <div>
      <div className="cart border-2 border-red-200">
        <div className="border-2 border-red-200">
          <h1>Budget: {budget}$</h1>
          <h1>Spend:{finalSalary}$</h1>
        </div>
        <div className="selected_people flex flex-col justify-between">
          {selectedPeople.map((person) => (
            <div key={person.id} className="flex justify-between p-3">
              <img
                src={person.image}
                className="h-10 w-10 object-cover rounded-full"
                alt=""
              />
              <h1>{person.name}</h1>
              <h1>{person.salary}$</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectedPeople: PropTypes.array.isRequired,
  finalSalary: PropTypes.number,
  budget: PropTypes.number.isRequired,
};
export default Cart;
