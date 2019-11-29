//@flow
import React, { Component } from "react";
import { withAddress } from "/connectors";

class AddressesList extends Component<{}> {
  render() {
    return <h2>Yoyo List {JSON.stringify(this.props)}</h2>;
  }
}

export default withAddress(AddressesList);
