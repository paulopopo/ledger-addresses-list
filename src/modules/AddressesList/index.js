//@flow
import React, { Fragment } from 'react';
import { withAddress, withi18n } from '/connectors';
import { Form, Listing } from '/modules';
import { ViewState } from '/types';
import { LanguageSelection } from '/components';
import './style.scss';
import compose from 'lodash.flowright';
/**
 *  <AddressesList /> is the parent components who s in charge of displaying either <Listing /> or <Form /> depending on the context
 *  @param viewState {ViewState} The view property from viewState give us the information of which component wh
 *  @returns {ReactComponent}
 */

const AddressesList = ({ i18n, viewState }: ViewState) => {
    return (
        <Fragment>
            <LanguageSelection onChange={val => i18n.changeLanguage(val)} countries={['en', 'fr']} />
            <div className="addressList__container center">
                {viewState.view === 'Listing' && <Listing />}
                {viewState.view === 'AddForm' && <Form />}
                {viewState.view === 'EditForm' && <Form />}
            </div>
        </Fragment>
    );
};

export default compose(withAddress, withi18n)(AddressesList);
