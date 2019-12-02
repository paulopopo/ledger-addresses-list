//@flow

import React, { useState } from "react";
import { Provider } from "./AddressContext";
import { ViewState } from "/types";

export default ({ children }) => {
  // const { children } = this.props;
  const [viewState: ViewState, setViewState] = useState({
    view: "AddForm",
    data: {}
  });
  return (
    <Provider
      value={{
        state: {
          viewState
        },
        actions: {
          setViewState
        }
      }}
    >
      {children}
    </Provider>
  );
};
