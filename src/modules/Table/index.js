//@flow

import React, { useState } from "react";
import { withAddress } from "/connectors";
import "./style.scss";
type TablePropsType = {
  addressLists: any,
  setIsEditing: function
};
export default withAddress(
  ({ addressLists, viewState, setViewState }: TablePropsType) => {
    // const [isClosing, setIsClosing] = useState(false);
    const [nextViewState, setNextViewState] = useState(viewState);
    return (
      <div
        onTransitionEnd={() => setViewState(nextViewState)}
        className={`table__container ${
          nextViewState.view !== "Table" ? "table__container--close" : ""
        }`}
      >
        Table
        <button onClick={() => setNextViewState({ view: "AddForm", data: {} })}>
          {" "}
          Add New Address
        </button>
        <button
          onClick={() =>
            setNextViewState({
              view: "EditForm",
              data: {
                name: "Client",
                address: "mtXWDB6k5yC5v7TcwKZHB89SUp85yCKshy",
                currencyId: "eos"
              }
            })
          }
        >
          {" "}
          Edit Address
        </button>
        <div> {JSON.stringify(addressLists)}</div>
      </div>
    );
  }
);
