import React, { useState } from "react";
import Banel from "../components/Banel";
import Reducer from "../components/Reducer";

function DropDownPage({ options }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };
  const handleSelected = (item) => {
    console.log(item);
    setSelectedItem(item);
    // setIsOpened(!isOpened);
  };

  const renderOptions = options.map((ele) => (
    <div key={ele.value} onClick={() => handleSelected(ele.value)}>
      {ele.label}
    </div>
  ));

  let content = "SELECT ...";
  if (selectedItem) {
    content = selectedItem;
  }

  return (
    <>
      <Banel onClick={handleClick}>{content} </Banel>
      {isOpened && <div>{renderOptions}</div>}
      <Reducer />
    </>
  );
}

export default DropDownPage;
