//@flow

import React from "react";
import ReactTable from "react-table";

const columns = [
  {
    Header: "Name",
    accessor: "name",
    headerStyle: { whiteSpace: "unset" },
    style: { whiteSpace: "unset" }
  },
  {
    Header: "Currency",
    accessor: "currencyId",
    headerStyle: { whiteSpace: "unset" },
    style: { whiteSpace: "unset" }
  },
  {
    Header: "Address",
    accessor: "address",
    headerStyle: { whiteSpace: "unset" },
    style: { whiteSpace: "unset" }
  }
];

const Table = ({ data, onUpdate, onDelete }) => {
  return (
    <div style={{ padding: "50px" }}>
      <ReactTable
        manual
        minRows={0}
        pageSize={1}
        data={data}
        columns={columns}
        pages={0}
        showPagination={true}
      />
    </div>
  );
};

export default Table;
