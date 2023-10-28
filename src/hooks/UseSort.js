import React, { useState } from "react";

export const useSort = (props) => {
  let sortedData = props.data; //initial value

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const handleClick = (label) => {
    // if click to another table then redo the cycle again from asc
    if (label !== sortBy) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }

    if (sortOrder == null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder == "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder == "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  if (sortBy && sortOrder) {
    const { sortValue } = props.config.find((column) => column.label == sortBy);
    sortedData = [...props.data].sort((a, b) => {
      let reverse = sortOrder === "asc" ? 1 : -1;
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      if (typeof valueA == "number") {
        return (valueA - valueB) * reverse;
      } else {
        return valueA.localeCompare(valueB) * reverse;
      }
    });
  }
  return {
    sortBy,
    sortOrder,
    handleClick,
    sortedData,
  };
};
