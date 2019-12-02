//@flow

import React, { useState, useEffect } from 'react';
import { withAddress, withi18n } from '/connectors';
import { InputWithError, SelectCurrency, ValidIndicator } from '/components';
import './style.scss';
import useForm from 'react-hook-form';
import { ViewState } from '/types';
import { validateAddress } from '/utils';
import { Icon, Button } from 'semantic-ui-react';
import compose from 'lodash.flowright';

type FormType = {
    viewState: ViewState,
    setViewState: function,
    updateAddressAtName: function,
    addAddress: function,
    t: function, // i18n
};

/*
  Minimum char length before performing an address validation,
  to prevent continuous validation when address is to short
 */
const minCharLengthBeforePerformingAddressValidation = 3;
/**
 *
 * @param {ViewState} viewState The view property from viewState give us the information of which component wh
 * @param {function}  setViewState Function to set view state
 * @param {function}  updateAddressAtName Function to update a particular address from withAddress context
 * @param {function}  addAddress Function to add a new address
 * @param {function}  for i18n translations
 */
const Form = ({ viewState, setViewState, updateAddressAtName, addAddress, t }: FormType) => {
    const [nextViewState, setNextViewState] = useState(viewState);

    /*We will keep track of addressValue to prevents validations excess
     The validation will happens when validation input  will be onBlur and each time addressValue is longer the 6
     */
    const [addressValue, setAddressValue] = useState('');
    const [validatingStatus, setValidatingStatus] = useState('');

    const { register, errors, handleSubmit, setValue, formState, getValues, triggerValidation } = useForm({
        mode: 'onBlur',
        defaultValues: viewState.view === 'EditForm' ? viewState.data : {},
    });

    const asyncValidAddress = async value => {
        setValidatingStatus('loading');
        const isAddressValid = await validateAddress({
            currency: { family: getValues().currencyId },
            address: value,
        });
        if (isAddressValid) {
            setValidatingStatus('valid');
            triggerValidation({ name: 'address' });
            return true;
        } else {
            setValidatingStatus('error');
            return false;
        }
    };

    useEffect(() => {
        if (addressValue.length > minCharLengthBeforePerformingAddressValidation)
            asyncValidAddress(addressValue).then();
    }, [addressValue]);

    const onSubmit = data => {
        if (Object.keys(errors).length > 0) return;

        if (viewState.view === 'AddForm') {
            addAddress(data);
        }
        if (viewState.view === 'EditForm') {
            updateAddressAtName(viewState.data, data);
        }
        setViewState({ view: 'Listing', data: {} });
    };

    return (
        <div
            onTransitionEnd={() =>
                nextViewState.view !== 'EditForm' &&
                nextViewState.view !== 'AddForm' &&
                setViewState({ view: 'Listing', data: {} })
            }
            className={`form__container ${
                nextViewState.view !== 'EditForm' && nextViewState.view !== 'AddForm' ? 'form__container--close' : ''
            } `}
        >
            {nextViewState.view === 'AddForm' && <div className="title add">{t('Form.add')} </div>}
            {nextViewState.view === 'EditForm' && <div className="title edit">{t('Form.edit')} </div>}
            <div className="back-button" onClick={() => setNextViewState({ view: 'Listing', demo: {} })}>
                <Icon size="large" name="angle left" />
                {t('Form.cancel')}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputWithError
                    label={t('Form.name')}
                    displayError={errors.name}
                    errorMessage={t('Errors.nameRequired')}
                >
                    <input
                        className={errors.name && 'error'}
                        name="name"
                        placeholder=""
                        ref={register({ required: true })}
                    />
                </InputWithError>

                <InputWithError
                    displayError={errors.currencyId}
                    errorMessage={t('Errors.currencyRequired')}
                    label={t('Form.currency')}
                >
                    <SelectCurrency
                        name="currencyId"
                        defaultValue={viewState.data.currencyId}
                        placeholder={t('Form.selectCurrency')}
                        setValue={value => {
                            setValue('currencyId', value, true);
                        }}
                        register={register}
                    />
                </InputWithError>

                <InputWithError
                    label={t('Form.address')}
                    displayError={!addressValue && errors.address}
                    errorMessage={t('Errors.addressLength')}
                >
                    <input
                        className={errors.address ? 'error' : validatingStatus}
                        disabled={!getValues().currencyId}
                        name="address"
                        placeholder={t('Form.yourSelectedCurrencyAddress')}
                        onChange={e => setAddressValue(e.target.value)}
                        ref={register({
                            required: true,
                            validate: async value => {
                                //Avoid extra validations onBlur when address is already valid
                                if (validatingStatus !== 'valid') return await asyncValidAddress(value);
                                else return true;
                            },
                        })}
                    />
                </InputWithError>
                <ValidIndicator state={validatingStatus} />

                <Button
                    type="submit"
                    disabled={!(formState.isValid && validatingStatus === 'valid' && !formState.isSubmitted)}
                    color="green"
                >
                    {t(`Form.${viewState.view === 'AddForm' ? 'add' : 'edit'}`)}
                </Button>
            </form>
        </div>
    );
};

Form.defaultProps = {
    viewState: { view: '', data: {} },
    setViewState: () => {},
    updateAddressAtName: () => {},
    addAddress: () => {},
};

//Using memo since Adding new Listing is often display
export default compose(withAddress, withi18n)(React.memo(Form));
