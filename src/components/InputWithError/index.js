//@flow
import React from "react";
import "./style.scss";
type InputWithErrorType = {
  ref: any,
  displayError: boolean
};

const InputWithError = ({
  label,
  displayError,
  ErrorMessage,
  children
}: InputWithErrorType) => {
  return (
    <div className="inputWithError">
      <label htmlFor="firstName">{label}</label>
      {children}
      {/*<input name={name} placeholder={placeholder} ref={ref} />*/}
      {displayError && <p> {ErrorMessage} </p>}
    </div>
  );
};

InputWithError.defaultProps = {
  ref: {},
  displayError: ""
};

export default InputWithError;
