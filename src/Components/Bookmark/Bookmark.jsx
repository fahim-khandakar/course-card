/* eslint-disable react/prop-types */
const Bookmark = ({ item }) => {
  const { title } = item;
  return <li>{title}</li>;
};

export default Bookmark;
