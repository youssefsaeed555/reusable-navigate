import React from "react";

function Table({ data, config, keyFn }) {
  const renderHeader = config.map((column) => {
    if (column.header) {
      return (
        <React.Fragment key={column.label}>{column.header()}</React.Fragment>
      );
    }
    return (
      <th key={column.label} className="border-b">
        {column.label}
      </th>
    );
  });

  const RowData = data.map((item) => {
    const renderCells = config.map((column) => (
      <td key={column.label} className="p-3">
        {column.render(item)}
      </td>
    ));
    return (
      <tr className="border-b" key={keyFn(item)}>
        {renderCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeader}</tr>
      </thead>
      <tbody>{RowData}</tbody>
    </table>
  );
}

export default Table;
