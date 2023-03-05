import React from 'react';
import styles from './Reason.module.scss';
import { reasons } from '../../constants';

const Reason = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__title}>
        <h1>Почему выбирают нас</h1>
      </div>
      <div className={styles.container__items}>
        {reasons.map((item) => (
          <div key={item.id}>
            <div>
              <div>
                <img src={item.img} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reason;
