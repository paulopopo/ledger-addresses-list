//@flow

import React, { useState } from 'react';
import { withAddress } from '/connectors';
import { Table } from '/components';

import './style.scss';
type ListingPropsType = {
    addressLists: any,
    setIsEditing: function,
};
export default withAddress(
    ({ viewState, setViewState, addressesListData, removeAddressAtName, updateAddressAtName }: ListingPropsType) => {
        const [nextViewState, setNextViewState] = useState(viewState);

        return (
            <div
                onTransitionEnd={() => setViewState(nextViewState)}
                className={`Listing__container ${nextViewState.view !== 'Listing' ? 'Listing__container--close' : ''}`}
            >
                Listing
                <Table
                    data={addressesListData}
                    onUpdate={() =>
                        setNextViewState({
                            view: 'EditForm',
                            data,
                        })
                    }
                    onDelete={updateAddressAtName}
                />
                <button onClick={() => setNextViewState({ view: 'AddForm', data: {} })}> Add New Listing</button>
                <button
                    onClick={() =>
                        setNextViewState({
                            view: 'EditForm',
                            data: {
                                name: 'Client',
                                address: 'mtXWDB6k5yC5v7TcwKZHB89SUp85yCKshy',
                                currencyId: 'eos',
                            },
                        })
                    }
                >
                    {' '}
                    Edit Listing
                </button>
            </div>
        );
    },
);
