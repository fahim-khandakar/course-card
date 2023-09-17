/* eslint-disable react/prop-types */
import logo from "../../Asset/Frame.png";
import dollar from "../../Asset/Dollar.png";
const Card = ({ item, handleAddingBookmark }) => {
  const { id, cover, title, description, credit_time, price } = item;
  return (
    <div className="text-center md:text-left bg-base-100 rounded-lg shadow-xl py-5 h-[400px] ">
      <figure className="w-full">
        <img className="mx-auto" src={cover} alt="cover" />
      </figure>
      <div className="p-3">
        <h2 className="text-lg font-semibold pb-3">{title}</h2>
        <p className="pb-3 h-20">{description}</p>
        <div className="flex justify-around md:justify-between">
          <div className="flex gap-2 ">
            <img src={dollar} alt="" />
            <p> Price: {price}</p>
          </div>
          <div className="flex gap-2">
            <img src={logo} alt="" />
            <p>Credit: {credit_time}hrs</p>
          </div>
        </div>
        <button
          id={id}
          onClick={() => handleAddingBookmark(item, id)}
          className=" py-2 w-full text-center text-white bg-[#2F80ED] rounded-lg mt-5"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Card;
