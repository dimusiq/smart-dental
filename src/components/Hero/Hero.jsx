import React from 'react';
import Button from '../Button/Button';
import styles from './Hero.module.scss';
import { about } from '../../assets/index';

const Hero = () => {
  return (
    <div className={styles.content}>
      <img
        src={about}
        alt='about'
        className={styles.content__img}
      />
      <div className={styles.window}>
        <h1 className={styles.window__title}>
          Бесплатная консультация
          <br /> включает в себя:
        </h1>
        <ul className={styles.window__title__list}>
          <li>Первичный осмотр</li>
          <li>Снимки</li>
          <li>План лечения</li>
        </ul>
        <Button className={styles.window__button}>
          Записаться
        </Button>
      </div>
      <section className={styles.section}>
        <div>
          <h1>О нашей клинике</h1>
          <p>
            Мы предлагаем полный спектр стоматологических
            услуг, индивидуальный подход, а также сочетание
            классических и инновационных методов лечения
            позволяет добиться максимальных результатов при
            наличии проблемы любой сложности. В клинике
            работает отделение для приема пациентов с острой
            болью.
          </p>
          <p>
            Оставьте страхи в прошлом. Доверьте здоровье
            своих зубов профессионалам из «Умной
            стоматологии»!
          </p>
        </div>
        <div className={styles.section__numbers}>
          <div>врачей</div>
          <div>услуг </div>
          <div>пациентов в день</div>
          <div> довольных пациентов</div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
