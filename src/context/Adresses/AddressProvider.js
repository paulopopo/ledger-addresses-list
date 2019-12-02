//@flow

import React, { useState } from 'react';
import { Provider } from './AddressContext';
import { ViewState, AddressShort } from '/types';

const defaultAddressList = [
    {
        name: ' eos',
        address: 'pZk5yC5v7JsD',
        currencyId: 'eos',
    },
    {
        name: 'Brad Garlinghouse',
        address: 'ZZZZZ6k5yC5v7TcwKZHB89SU',
        currencyId: 'ripple',
    },
    {
        name: 'Vitalik Buterin',
        address: 'p85yCKshyp85yCKshyp85yCKshyp85yC',
        currencyId: 'ethereum',
    },
    {
        name: 'John Doe',
        address: 'pZk5yC5v7Tcw',
        currencyId: 'bitcoin',
    },
];
export default ({ children }) => {
    const [viewState: ViewState, setViewState: function] = useState({
        view: 'Listing',
        data: {},
    });
    const [addressesListData: Array<AddressShort>, setAddressesListData: function] = useState(defaultAddressList);

    const removeAddressAtName = name =>
        setAddressesListData(addressesListData.filter(address => address.name !== name));

    const updateAddressAtName = (previous, newAddress) => {
        addressesListData[addressesListData.findIndex(address => address.name === previous.name)] = newAddress;
        setAddressesListData(addressesListData);
    };

    const addAddress = newAddress => {
        addressesListData.push(newAddress);
        setAddressesListData(addressesListData);
    };

    return (
        <Provider
            value={{
                state: {
                    viewState,
                    addressesListData,
                },
                actions: {
                    setViewState,
                    removeAddressAtName,
                    updateAddressAtName,
                    addAddress,
                },
            }}
        >
            {children}
        </Provider>
    );
};
