import React from 'react';
import Button from '../Button/Button';
import styles from '../About/About.module.scss';
import { about } from '../../assets/index';

const About = () => {
  return (
    <div className={styles.content}>
      <img
        src={about}
        alt='about'
        className={styles.content__img}
      />
      <div className={styles.window}>
        <h1 className={styles.window__title}>
          Бесплатная консультация включает в себя:
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
    </div>
  );
};

export default About;
