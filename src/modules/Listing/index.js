//@flow

import React, { useState } from 'react';
import { withAddress, withi18n } from '/connectors';
import { Table } from '/components';
import { Button, Icon } from 'semantic-ui-react';
import compose from 'lodash.flowright';

import './style.scss';
type ListingPropsType = {
    addressLists: any,
    setIsEditing: function,
};

export default compose(
    withAddress,
    withi18n,
)(({ t, viewState, setViewState, addressesListData, removeAddressAtName }: ListingPropsType) => {
    const [nextViewState, setNextViewState] = useState(viewState);

    return (
        <div
            onTransitionEnd={() => setViewState(nextViewState)}
            className={`Listing__container ${nextViewState.view !== 'Listing' ? 'Listing__container--close' : ''}`}
        >
            <div className="add-button">
                <Button icon color="green" onClick={() => setNextViewState({ view: 'AddForm', data: {} })}>
                    <Icon name="plus" /> {t('Listing.addNewAddrress')}
                </Button>
            </div>
            <Table
                data={addressesListData}
                onUpdate={data =>
                    setNextViewState({
                        view: 'EditForm',
                        data,
                    })
                }
                onDelete={removeAddressAtName}
            />
        </div>
    );
});
