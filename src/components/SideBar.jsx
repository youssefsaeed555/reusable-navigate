import React from "react";
import Link from "./Link";

function SideBar() {
  const links = [
    { label: "DropDown", path: "/" },
    { label: "Accordion", path: "/Accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
  ];
  const renderItems = links.map((route, index) => (
    <Link
      key={index}
      to={route.path}
      activeClassLink="font-bold border-l-4 border-blue-500 pl-2"
    >
      {route.label}
    </Link>
  ));
  return <div className="sticky top-0  flex flex-col">{renderItems}</div>;
}

export default SideBar;
