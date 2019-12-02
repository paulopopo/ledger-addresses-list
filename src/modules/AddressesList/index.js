//@flow
import React from "react";
import { withAddress } from "/connectors";
import "./style.scss";
import { Form, Table } from "/modules";
import { ViewState } from "/types";

//Address context = list of address
const AddressesList = ({ viewState }: ViewState) => {
  return (
    <div className="addressList__container center">
      {viewState.view === "Table" && <Table />}
      {viewState.view === "AddForm" && <Form />}
      {viewState.view === "EditForm" && <Form />}
    </div>
  );
};

export default withAddress(AddressesList);
