import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleExpand = (nextIndex) => {
    console.log(nextIndex, expandedIndex);
    if (nextIndex == expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderItems = items.map((ele, id) => {
    const expand = id == expandedIndex;
    const icon = (
      <span className="text-xl">
        {expand ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    console.log(expand);
    return (
      <div
        key={id}
        className="flex flex-col p-3 bg-gray-50 border-b   cursor-pointer"
      >
        <div className="flex" onClick={() => handleExpand(id)}>
          {ele.label}
          {icon}
        </div>
        {expand && <div className=" p-5 bg-white"> {ele.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderItems}</div>;
}

export default Accordion;
