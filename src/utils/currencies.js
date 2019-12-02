//@flow

export const validateAddress = async ({ currency, address }) => {
    // wait 1s to simulate network request
    await new Promise(r => setTimeout(r, 1000));
    if (validators[currency.family]) return validators[currency.family](address);
    else {
        return address.length === 12;
    }
};

// Obviously the validators implemented here are
// dummy and do no reflect the reality
const validators = {
    bitcoin: address => address.length === 12,
    ripple: address => address.length === 24,
    ethereum: address => address.length === 32,
    eos: address => address.length === 12,
};
