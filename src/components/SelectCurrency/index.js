//@flow

import { Dropdown } from "semantic-ui-react";
import { listCryptoCurrencies } from "@ledgerhq/live-common/lib/currencies";
import React from "react";

/**
 * Return DropDown Components
 * @param name {String} For reference when dealing with ref
 * @param register {Function} register function given by react-hooks-form. not mandatory
 * @param setValue {Function} Callback function with setting dropdown Value
 */
type SelectCurrencyType = {
  name: string,
  defaultValue?: string,
  register?: function,
  setValue: function
};

const SelectCurrency = ({
  name,
  register,
  setValue,
  defaultValue
}: SelectCurrencyType) => {
  const currencies = listCryptoCurrencies();

  register && register({ name }, { required: true });

  // console.log( "Hello", defaultValue, listCryptoCurrencies());
  return (
    <React.Fragment>
      <Dropdown
        name={name}
        value={defaultValue}
        placeholder="Select Friend"
        fluid
        search
        selection
        options={currencies.map(currency => ({
          key: currency.id,
          value: currency.id,
          text: currency.name
        }))}
        onChange={(e, { value }) => {
          setValue(name, value, true);
        }}
      />
    </React.Fragment>
  );
};

SelectCurrency.defaultProps = {
  name: "",
  register: null,
  defaultValue: "",
  setValue: () => {}
};

export default SelectCurrency;
