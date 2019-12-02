//@flow
import React, { useState, useEffect } from 'react';
import { withAddress } from '/connectors';
import { InputWithError, SelectCurrency } from '/components';
import './style.scss';
import useForm from 'react-hook-form';

type FormType = {
    elt: any,
    setViewState: function,
};

const Form = ({ viewState, setViewState, updateAddressAtName, addAddress }: FormType) => {
    const [nextViewState, setNextViewState] = useState(viewState);

    const { register, errors, handleSubmit, setValue } = useForm({
        mode: 'onBlur',
        defaultValues: viewState.view === 'EditForm' ? viewState.data : {},
    });

    useEffect(() => {
        // console.log("erros here ", errors);
    }, [errors]);

    const onSubmit = data => {
        if (Object.keys(errors).length > 0) return;

        alert(JSON.stringify(data));
        if (viewState.view === 'AddForm') {
            addAddress(data);
        }
        if (viewState.view === 'EditForm') {
            updateAddressAtName(data);
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
            <button onClick={() => setNextViewState({ view: 'Listing', demo: {} })}>Cancel</button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputWithError label="Name" displayError={errors.name} errorMessage="Name is required">
                    <input name="name" placeholder="" ref={register({ required: true })} />
                </InputWithError>

                <InputWithError displayError={errors.currencyId} errorMessage="Currency is required" label="Currency">
                    <SelectCurrency
                        name="currencyId"
                        defaultValue={viewState.data.currencyId}
                        setValue={value => setValue('currencyId', value, true)}
                        register={register}
                    />
                </InputWithError>

                <InputWithError label="Listing" displayError={errors.address} errorMessage="Listing is required">
                    <input name="address" placeholder="" ref={register({ required: true })} />
                </InputWithError>

                <input type="submit" />
            </form>
        </div>
    );
};

//Using memo since Adding new Listing is often display
export default withAddress(React.memo(Form));
