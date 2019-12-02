//@flow

import React from "react";
import ReactDOM from "react-dom";
import { AddressesList } from "/modules";
import { AddressProvider } from "/context";
import "@babel/polyfill";
import "semantic-ui-css/semantic.min.css";
import "react-table/react-table.css";

class App extends React.Component<{}> {
  render() {
    return (
      <AddressProvider>
        <AddressesList />
      </AddressProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
