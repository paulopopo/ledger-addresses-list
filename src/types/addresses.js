//@flow
import { CryptoCurrency } from '/types';

export type Addresses = {
    name: string,
    address: string,
    currency: CryptoCurrency,
};

export type AddressShort = {
    name: string,
    address: string,
    currencyId: string,
};
