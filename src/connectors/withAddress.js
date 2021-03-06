//@flow

import React, { useContext } from 'react';
import { AddressContext } from '/context';

export default Component => props => {
    const { state, actions } = useContext(AddressContext);
    return <Component {...props} {...state} {...actions} />;
};
