import React, { useState } from 'react';
import useInput from '../../hooks/use-input';
import { list } from '../../assets';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './Form.module.scss';

const portalElement = document.getElementById('overlays');

const Form = ({ onHideForm }) => {
  const [formValid, setFormValid] = useState(false);
  const {
    value: enteredName,
    hasError: hasNameInputError,
    isValid: isNameValid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler: nameInputLostFocusHandler,
    resetValues: resetNameInputValues,
  } = useInput((val) => val.trim() !== '');

  const {
    value: enteredTel,
    hasError: hasTelInputError,
    isValid: isTelValid,
    inputChangeHandler: telInputChangeHandler,
    inputLostFocusHandler: telInputLostFocusHandler,
    resetValues: resetTelInputValues,
  } = useInput((val) => val.trim() !== '');

  let isFormValid = false;

  if (isNameValid && isTelValid) {
    isFormValid = true;
  }

  const submitData = async (userName, tel) => {
    await fetch(
      'https://react-https-21668-default-rtdb.firebaseio.com/user.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userName,
          tel: tel,
        }),
      }
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    submitData(enteredName, enteredTel);
    resetNameInputValues();
    resetTelInputValues();
  };

  return (
    <Modal onHideForm={onHideForm}>
      <div className={styles.container}>
        <div className={styles.container__title}>
          ЗАПИСЬ НА КОНСУЛЬТАЦИЮ
        </div>
        <form
          onSubmit={submitHandler}
          className={styles.form}
        >
          <div className={styles.form__content}>
            <div className={styles.form__title}>
              Бесплатная консультация включает в себя:
            </div>
            <ul className={styles.form__list}>
              <img src={list} alt='list' />
              <li>Первичный осмотр</li>
              <li>Снимки</li>
              <li>План лечения</li>
            </ul>
          </div>
          <div className={styles.form__container}>
            <input
              className={styles.form__container__input}
              type='text'
              placeholder='Имя'
              onChange={nameInputChangeHandler}
              onBlur={nameInputLostFocusHandler}
              value={enteredName}
            />
            {hasNameInputError && <p>Введите Имя</p>}
            <input
              className={styles.form__container__input}
              type='text'
              placeholder='Телефон'
              onChange={telInputChangeHandler}
              onBlur={telInputLostFocusHandler}
              value={enteredTel}
            />
            {hasTelInputError && <p>Введите телефон</p>}
            <Button
              disabled={!isFormValid}
              className={styles.form__btn}
            >
              Записаться
            </Button>
            <div className={styles.form__info}>
              <p>
                Нажимая на кнопку, я соглашаюсь на обработку
                персональных данных
              </p>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Form;
