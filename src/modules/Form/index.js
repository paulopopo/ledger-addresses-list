//@flow
import React, { useState, useEffect } from "react";
import { withAddress } from "/connectors";
import { InputWithError, SelectCurrency } from "/components";
import "./style.scss";
import useForm from "react-hook-form";

type FormType = {
  elt: any,
  setIsEditing: function
};
export default withAddress(({ setIsEditing, isEditing }: FormType) => {
  const [isClosing, setIsClosing] = useState(false);

  const { register, errors, handleSubmit, setValue } = useForm({
    mode: "onBlur"
  });

  useEffect(() => {
    // console.log("erros here ", errors);
  }, [errors]);

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <div
      onTransitionEnd={() => isClosing && setIsEditing(false)}
      className={`form__container ${
        isEditing && isClosing ? "form__container--close" : ""
      } `}
    >
      <button onClick={() => setIsClosing(true)}>Cancel</button>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <InputWithError
          displayError={errors.currency}
          ErrorMessage="Currency is required"
          label="Currency"
        >
          <SelectCurrency
            name="currency"
            setValue={value => setValue("currency", value, true)}
            register={register}
          />
        </InputWithError>

        <input type="submit" />
      </form>
    </div>
  );
});
