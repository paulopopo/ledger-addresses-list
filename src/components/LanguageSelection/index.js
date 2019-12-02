//@flow
import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
const countryOptions = [
    { key: 'en', value: 'en', text: 'English' },
    { key: 'fr', value: 'fr', text: 'France' },
    { key: 'ger', value: 'ger', text: 'Deutsche' },
];
type LanguageSelectionType = {
    countries: Array<string>,
    onChange: function,
};

const LanguageSelection = ({ countries, onChange }: LanguageSelectionType) => {
    const [selectedCountry: string, setSelectedCountry: function] = useState('en');
    const options = countryOptions.filter(value => countries.includes(value.key));
    return (
        <Dropdown
            value={selectedCountry}
            onChange={(e, { value }) => {
                setSelectedCountry(value);
                onChange(value);
            }}
            search
            selection
            options={options}
        />
    );
};
LanguageSelection.defaultProps = {
    countries: ['en', 'fr'],
    onChange: null,
};

export default LanguageSelection;
