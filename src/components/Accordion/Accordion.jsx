import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import { accordionData } from '../../constants';

const Accordion = () => {
  const [isActive, setIsActive] = useState(null);

  const accordionHandler = (i) => {
    if (isActive === i) {
      return setIsActive(null);
    }
    setIsActive(i);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>УСЛУГИ</h2>
      <div className={styles.accordion}>
        {accordionData.map((item, i) => (
          <div onClick={() => accordionHandler(i)}>
            <div
              key={i}
              className={styles.accordion__title}
            >
              {item.title}
              <div>{isActive === i ? '-' : '+'}</div>
            </div>
            {isActive === i && (
              <div className={styles.accordion__content}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
