import React from "react";
import Table from "./Table";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import { useSort } from "../hooks/UseSort";

function SortableTable(props) {
  const { sortBy, sortOrder, handleClick, sortedData } = useSort(props);

  const showICons = (label, sortBy, sortOrder) => {
    //to be the icons of order different to the icons of name
    if (label !== sortBy) {
      return (
        <div className="flex flex-col">
          <GoArrowUp />
          <GoArrowDown />
        </div>
      );
    }

    if (sortOrder == null) {
      return (
        <div className="flex flex-col">
          <GoArrowUp />
          <GoArrowDown />
        </div>
      );
    } else if (sortOrder == "asc") {
      return <GoArrowUp />;
    } else if (sortOrder == "desc") {
      return <GoArrowDown />;
    }
  };

  const config = props.config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          onClick={() => handleClick(column.label)}
          className="hover:bg-gray-100 cursor-pointer"
        >
          <div className="flex items-center">
            {showICons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <>
      <Table {...props} config={config} data={sortedData} />
    </>
  );
}

export default SortableTable;
