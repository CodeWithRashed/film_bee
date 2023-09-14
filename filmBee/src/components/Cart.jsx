import PropTypes from "prop-types";

const Cart = ({ selectedPeople }) => {
  return (
    <div>
      <div className="cart border-2 border-red-200">
        <div className="border-2 border-red-200">
          <h1>Budget: 20000$</h1>
          <h1>Spend: 20000$</h1>
        </div>
        <div className="selected_people flex justify-between">
          {selectedPeople.map((people) => console.log(people))}
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectedPeople: PropTypes.array.isRequired,
};
export default Cart;
