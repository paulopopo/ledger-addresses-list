//@flow
import { CryptoCurrency } from "/types";

export type Addresses = {
  name: string,
  address: string,
  currency: CryptoCurrency
};

export type AddresseShort = {
  name: string,
  address: string,
  currencyId: string
};
