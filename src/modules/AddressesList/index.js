//@flow
import React from 'react';
import { withAddress } from '/connectors';
import './style.scss';
import { Form, Listing } from '/modules';
import { ViewState } from '/types';

/**
 *  <AddressesList /> is the parent components who s in charge of displaying either <Listing /> or <Form /> depending on the context
 *  @param viewState {ViewState} The view property from viewState give us the information of which component wh
 *  @returns {ReactComponent}
 */

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
