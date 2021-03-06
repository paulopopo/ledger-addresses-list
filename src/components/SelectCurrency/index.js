//@flow

import { Dropdown } from 'semantic-ui-react';
import { listCryptoCurrencies } from '@ledgerhq/live-common/lib/currencies';
import React, { useState } from 'react';
import { CryptoCurrency } from '/types';

/**
 * Return DropDown Components
 * @param name {String} For reference when dealing with ref
 * @param register {Function} register function given by react-hooks-form. not mandatory
 * @param setValue {Function} Callback function with setting dropdown Value
 * @returns {ReactComponent}
 */
type SelectCurrencyType = {
    name: string,
    defaultValue?: string,
    register?: function,
    setValue: function,
    placeholder?: function,
};

const SelectCurrency = ({ name, register, setValue, defaultValue, placeholder }: SelectCurrencyType) => {
    const currencies: Array<CryptoCurrency> = listCryptoCurrencies();
    register && register({ name }, { required: true });
    const [selectedValue: string, setSelectedValue: function] = useState(defaultValue);

    return (
        <React.Fragment>
            <Dropdown
                name={name}
                value={selectedValue}
                placeholder={placeholder}
                search
                fluid
                selection
                options={currencies.map(currency => ({
                    key: currency.id,
                    value: currency.id,
                    text: currency.name,
                }))}
                onChange={(e, { value }) => {
                    setSelectedValue(value);
                    setValue(value);
                }}
            />
        </React.Fragment>
    );
};

SelectCurrency.defaultProps = {
    name: '',
    register: null,
    defaultValue: '',
    setValue: () => {},
};

export default SelectCurrency;
