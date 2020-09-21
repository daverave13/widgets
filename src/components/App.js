import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

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

  return (
    <div className="App">
      <Header />
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label="Select a color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/accordion">
        <Accordion items={items} />
      </Route>
    </div>
  );
};

export default App;
