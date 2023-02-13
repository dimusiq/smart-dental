import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import { accordionData } from '../../constants';

const Accordion = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}></h2>
      <div className={styles.accordion}>
        {accordionData.map((item, i) => (
          <div key={i} className={styles.accordion__title}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
