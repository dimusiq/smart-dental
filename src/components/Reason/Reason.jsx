import React from 'react';
import styles from './Reason.module.scss';

const Reason = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__title}>
        <h1>Почему выбирают нас</h1>
      </div>

      <div className={styles.container__items}>

        <div>Доступные цены</div>
        <div>Гарантия на лечение</div>
        <div>Бесплатная парковка</div>
        <div>Беспроцентная рассрочка </div>
        <div>Лечение без боли</div>
        <div>Новейшие технологии</div>
      </div>
    </section>
  );
};

export default Reason;
