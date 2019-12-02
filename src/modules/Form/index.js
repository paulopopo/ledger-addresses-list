//@flow
import React, { useState, useEffect } from "react";
import { withAddress } from "/connectors";
import { InputWithError, SelectCurrency } from "/components";
import "./style.scss";
import useForm from "react-hook-form";

type FormType = {
  elt: any,
  setViewState: function
};
export default withAddress(({ viewState, setViewState }: FormType) => {
  const [nextViewState, setNextViewState] = useState(viewState);

  const { register, errors, handleSubmit, setValue } = useForm({
    mode: "onBlur",
    defaultValues: viewState.view === "EditForm" ? viewState.data : {}
  });

  useEffect(() => {
    // console.log("erros here ", errors);
  }, [errors]);

  const onSubmit = data => {
    alert(JSON.stringify(data));
    setViewState({ view: "Table", data: {} });
  };

  return (
    <div
      onTransitionEnd={() => setViewState({ view: "Table", data: {} })}
      className={`form__container ${
        nextViewState.view !== "EditForm" && nextViewState.view !== "AddForm"
          ? "form__container--close"
          : ""
      } `}
    >
      <button onClick={() => setNextViewState({ view: "Table", demo: {} })}>
        Cancel
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithError
          label="Name"
          displayError={errors.name}
          ErrorMessage="Name is required"
        >
          <input
            name="name"
            placeholder=""
            ref={register({ required: true })}
          />
        </InputWithError>

        <InputWithError
          displayError={errors.currency}
          ErrorMessage="Currency is required"
          label="Currency"
        >
          <SelectCurrency
            name="currencyId"
            defaultValue={viewState.data.currencyId}
            setValue={value => setValue("currencyId", value, true)}
            register={register}
          />
        </InputWithError>

        <InputWithError
          label="Address"
          displayError={errors.address}
          ErrorMessage="Address is required"
        >
          <input
            name="address"
            placeholder=""
            ref={register({ required: true })}
          />
        </InputWithError>

        <input type="submit" />
      </form>
    </div>
  );
});
