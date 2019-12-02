//@flow
import React from 'react';
import './style.scss';

type InputWithErrorType = {
    label: string,
    displayError: boolean,
    errorMessage: string,
    children: React.Node,
};

/**
 *
 * @param label {string} label is display in <p/> before inputs
 * @param displayError {boolean} Will display the error message if true
 * @param errorMessage {string} Error message
 * @param children {React.Node} react node elements
 * @returns {ReactComponent}
 */
const InputWithError = ({ label, displayError, errorMessage, children }: InputWithErrorType) => {
    return (
        <div className="inputWithError">
            <label htmlFor="firstName">{label}</label>
            {children}
            {/*<input name={name} placeholder={placeholder} ref={ref} />*/}
            {displayError && <p> {errorMessage} </p>}
        </div>
    );
};

InputWithError.defaultProps = {
    label: '',
    displayError: false,
    errorMessage: '',
    children: null,
};

export default InputWithError;
