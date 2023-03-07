import React from 'react';
import styles from '../Trust/Trust.module.scss';
import { tooth, katya2 } from '../../assets/index';

const Trust = () => {
  return (
    <section className={styles.container}>
      <div>
        <div>
          <h4>о доверии</h4>
          <p>
            Наша главная цель - долгосрочные доверительные
            отношения с нашими пациентами. Поэтому мы
            работаем только на лучший результат. Нам
            доверяют и мы это ценим.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__image}>
          <img
            className={styles.content__image__background}
            src={tooth}
            alt=''
          />
          <img
            className={styles.content__image__person}
            src={katya2}
            alt=''
          />
        </div>
        <div>
          <p>
            Если у Вас возникли любые вопросы по лечению или
            по уже выполненным работам в клинике, Вы можете
            задать их мне лично.
          </p>
          <p>Я с родостью отвечу на все Ваши вопросы :)</p>
          <p>
            Генеральный директор клиники Екатерина
            Доброславская
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
