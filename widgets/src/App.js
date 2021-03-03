import Accordion from "./components/Accordion";
import React from "react";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JS framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS lib among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
