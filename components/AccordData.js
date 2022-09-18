import React from "react";
import Accordian from "./Accordian";

const AccordData = () => {
  const data = [
    {
      title: "Lorem 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
    },
    {
      title: "Lorem 2",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
    },
    {
      title: "Lorem 3",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
    },
    {
      title: "Lorem 4",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
    }
  ];
  return data.map((ob) => <Accordian value={ob} />);
};

export default AccordData;
