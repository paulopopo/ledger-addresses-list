//@flow

import React, { useState } from "react";
import { withAddress } from "/connectors";
import "./style.scss";
type TablePropsType = {
  addressLists: any,
  setIsEditing: function
};
export default withAddress(
  ({ addressLists, isEditing, setIsEditing }: TablePropsType) => {
    const [isClosing, setIsClosing] = useState(false);
    return (
      <div
        onTransitionEnd={() => setIsEditing(true)}
        className={`table__container ${
          !isEditing && isClosing ? "table__container--close" : ""
        }`}
      >
        Table
        <button onClick={() => setIsClosing(true)}> Add New Address</button>
        <div> {JSON.stringify(addressLists)}</div>
      </div>
    );
  }
);
