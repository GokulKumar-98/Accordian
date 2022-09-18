import React, { useState } from "react";

const Accordian = ({ value }) => {
  console.log(value);
  const [isopen, setisopen] = useState(false);
  const data = {
    title: "Lorem 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
  laborum cupiditate possimus labore, hic temporibus velit dicta earum
  suscipit commodi eum enim atque at? Et perspiciatis dolore iure
  voluptatem.`
  };
  const handleclick = () => {
    setisopen(!isopen);
  };

  return (
    <div className="accord_section">
      <div onClick={handleclick} className="accord_title">
        {value.title}
        <span>{isopen ? "-" : "+"}</span>
      </div>
      <div className={isopen ? "accord_content" : "hide"}>{value.content}</div>
    </div>
  );
};

export default Accordian;
