//@flow

import React from "react";
import ReactDOM from "react-dom";
import { AddressesList } from "/modules";
import { AddressProvider } from "/context";

class App extends React.Component<{}> {
  render() {
    return (
      <AddressProvider>
        <h2>Hello! I am test</h2>
        <AddressesList />
      </AddressProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
