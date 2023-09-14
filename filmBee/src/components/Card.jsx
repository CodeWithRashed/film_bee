import PropTypes from "prop-types";
const Cart = ({ singleData }) => {
  return (
    <div className="border-2 border-red-200 p-3">
      <h1>{singleData.img}</h1>
      <h1>{singleData.name}</h1>
    </div>
  );
};

Cart.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default Cart;
