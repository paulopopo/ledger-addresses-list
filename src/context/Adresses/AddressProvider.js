//@flow

import React, { PureComponent } from "react";
import { Provider } from "./AddressContext";

class AddressProvider extends PureComponent<{}> {
  render() {
    const { children } = this.props;
    return (
      <Provider
        value={{
          state: {
            messsage: "Hi that's provider"
          }
        }}
      >
        {children}
      </Provider>
    );
  }
}

export default AddressProvider;
