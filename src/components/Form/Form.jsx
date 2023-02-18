import React from 'react';
import { list } from '../../assets';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './Form.module.scss';

const portalElement = document.getElementById('overlays');

const Form = ({ onHideForm }) => {
  return (
    <Modal onHideForm={onHideForm}>
      <div className={styles.container}>
        <div className={styles.container__title}>
          ЗАПИСЬ НА КОНСУЛЬТАЦИЮ
        </div>
        <div className={styles.form}>
          <div className={styles.form__content}>
            <div className={styles.form__title}>
              Бесплатная консультация включает в себя:
            </div>
            <ul className={styles.form__list}>
              <img src={list} alt='list'></img>
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
            />
            <input
              className={styles.form__container__input}
              type='text'
              placeholder='Телефон'
            />
            <Button className={styles.form__btn}>
              Записаться
            </Button>
            <div className={styles.form__info}>
              <p>
                Нажимая на кнопку, я соглашаюсь на обработку
                персональных данных
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Form;
