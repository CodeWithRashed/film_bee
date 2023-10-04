import PropTypes from "prop-types";
const Card = ({ singleData, buttonFunction }) => {
  return (
    <div className="border-2 border-red-200 p-3 rounded flex flex-col justify-center items-center text-center">
      <img
        className="h-52 w-44 object-cover object-center"
        src={singleData.image}
        alt=""
      />
      <h1>Name: {singleData.name}</h1>
      <h1>Title: {singleData.title}</h1>
      <h1>Salary: {singleData.salary}</h1>
      <button
        className="bg-red-200 p-2 rounded"
        onClick={() => buttonFunction(singleData)}
      >
        Select
      </button>
    </div>
  );
};

Card.propTypes = {
  singleData: PropTypes.object.isRequired,
  buttonFunction: PropTypes.func.isRequired,
};

export default Card;
