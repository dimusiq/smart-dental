import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import { accordionData } from '../../constants';

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  const accordionHandler = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}></h2>
      <div className={styles.accordion}>
        {accordionData.map((item, i) => (
          <div onClick={accordionHandler}>
            <div
              key={i}
              className={styles.accordion__title}
            >
              {item.title}
              {isActive && <div>{item.content}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
