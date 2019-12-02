//@flow
import { AddressShort } from '/types';

export type ViewState = {
    view: string,
    data?: AddressShort,
    t?: function, // i18n
    i18n?: Object, // i18n
};
