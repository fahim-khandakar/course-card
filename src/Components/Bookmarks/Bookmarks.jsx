import Bookmark from "../Bookmark/Bookmark";

/* eslint-disable react/prop-types */
const Bookmarks = ({
  bookmark,
  totalCredit,
  totalPrice,
  creditHourRemaining,
}) => {
  return (
    <div className="w-2/3 md:bg-base-100 md:shadow-xl md:rounded-lg  mx-auto text-center md:text-left md:w-1/4 my-5 md:my-10 md:fixed md:right-0  md:p-3">
      <h1 className="text-[#2F80ED] font-bold pb-3 text-lg">
        Credit Hours Remaining: {creditHourRemaining} hrs
      </h1>
      <hr />
      <h1 className="text-2xl font-bold py-5">Course Name</h1>
      <ol className="list-decimal min-h-[150px] pb-3 md:ml-4">
        {bookmark.map((item, idx) => (
          <Bookmark key={idx} item={item}></Bookmark>
        ))}
      </ol>
      <hr />
      <p className="font-medium py-3">Total Credit Hours: {totalCredit}</p>
      <hr />
      <p className="font-semibold py-3">Total Price: {totalPrice} USD</p>
    </div>
  );
};

export default Bookmarks;
