//@flow

import React, { useState } from 'react';
import { Provider } from './AddressContext';
import { ViewState } from '/types';

const defaultAddressList = [
    {
        name: 'Client eos',
        address: 'mtXWDB6k5yC5v7TcwKZHB89SUp85yCKshy',
        currencyId: 'eos',
    },
    {
        name: 'Client ripple',
        address: 'ZZZZZ6k5yC5v7TcwKZHB89SUp85yCKshy',
        currencyId: "ripple",
    },
    {
        name: 'my btc',
        address: 'OOOOO6k5yC5v7TcwKZHB89SUp85yCKshy',
        currencyId: 'bitcoin',
    },
];
export default ({ children }) => {
    // const { children } = this.props;
    const [viewState: ViewState, setViewState] = useState({
        view: 'Listing',
        data: {},
    });

    // const [addressesListData ,setAddressesListData] = useState();
    const [addressesListData, setAddressesListData] = useState(defaultAddressList);

    const removeAddressAtName = name =>
        setAddressesListData(addressesListData.filter(address => address.name !== name));

    const updateAddressAtName = (previous,newAddress) => {
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
