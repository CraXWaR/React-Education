import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveLong = (value) => value.trim() === 5;

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const name = useRef();
  const street = useRef();
  const postal = useRef();
  const city = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = name.current.value;
    const enteredStreet = street.current.value;
    const enteredPostal = postal.current.value;
    const enteredCity = city.current.value;

    const ifNameValid = !isEmpty(enteredName);
    const ifStreetValid = !isEmpty(enteredStreet);
    const ifCityValid = !isEmpty(enteredCity);
    const ifPostalValid = isFiveLong(enteredPostal);

    setFormIsValid({
      name: ifNameValid,
      street: ifStreetValid,
      city: ifCityValid,
      postalCode: ifPostalValid,
    });

    const formIsValid =
      ifNameValid && ifStreetValid && ifCityValid && ifPostalValid;

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    formIsValid.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formIsValid.street ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formIsValid.postal ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formIsValid.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={name} />
        {!formIsValid.name && <p>Enter valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={street} />
        {!formIsValid.street && <p>Enter valid street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postal} />
        {!formIsValid.postalCode && <p>Enter valid Postal Code!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={city} />
        {!formIsValid.city && <p>Enter valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
