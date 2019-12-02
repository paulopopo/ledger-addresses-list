//@flow
import React from 'react';
import { withAddress } from '/connectors';
import './style.scss';
import { Form, Listing } from '/modules';
import { ViewState } from '/types';

//Listing context = list of address
const AddressesList = ({ viewState }: ViewState) => {
    return (
        <div className="addressList__container center">
            {viewState.view === 'Listing' && <Listing />}
            {viewState.view === 'AddForm' && <Form />}
            {viewState.view === 'EditForm' && <Form />}
        </div>
    );
};

export default withAddress(AddressesList);
