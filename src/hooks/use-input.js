import React, { useState } from 'react';

const useInput = (validateValueFunc) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [wasInputTouched, setWasInputTouched] =
    useState('');

  const isValueValid = validateValueFunc(enteredValue);

  const isInputValid = !isValueValid && wasInputTouched;
  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputLostFocusHandler = (e) => {
    setWasInputTouched(true);
  };

  const resetValues = () => {
    setEnteredValue('');
    setWasInputTouched('');
  };

  return {
    value: enteredValue,
    hasError: isInputValid,
    isValid: isValueValid,
    inputChangeHandler,
    inputLostFocusHandler,
    resetValues,
  };
};

export default useInput;
