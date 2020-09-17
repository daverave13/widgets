import React, { useState } from "react";

export default ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    setActiveIndex(activeIndex !== index ? index : null);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
          {active ? (
            <div className={`content ${active}`}>
              <p className="item content">{item.content}</p>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="accordion">
      <div className="ui styled accordion">{renderedItems}</div>
    </div>
  );
};
