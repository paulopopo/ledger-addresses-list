//@flow

import React, { useState } from "react";
import { Provider } from "./AddressContext";

export default ({ children }) => {
  // const { children } = this.props;
  const [isEditing, setIsEditing] = useState(true);
  return (
    <Provider
      value={{
        state: {
          isEditing
        },
        actions: {
          setIsEditing
        }
      }}
    >
      {children}
    </Provider>
  );
};
