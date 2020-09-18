import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

const items = [
  {
    title: "What is React?",
    content: "react is a frontend js library",
  },
  {
    title: "What is love?",
    content: "baby don't hurt me",
  },
  {
    title: "don't hurt me",
    content: "no more",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowDropDown(!showDropDown)}>Show/Hide DropDown</button>
      {showDropDown ? <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> : null}
      <br />
      <br />
      <br />
      <Search />
      <br />
      <br />
      <br />
      <Accordion items={items} />
    </div>
  );
};

export default App;
