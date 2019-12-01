//@flow
import React, { Component } from "react";
import { withAddress } from "/connectors";
import "./style.scss";
import { Form, Table } from "/modules";

//Address context = list of address
class Index extends Component<{}> {
  render() {
    return (
      <div className="addressList__container center">
        {this.props.isEditing ? <Form /> : <Table />}
      </div>
    );
  }
}

export default withAddress(Index);
