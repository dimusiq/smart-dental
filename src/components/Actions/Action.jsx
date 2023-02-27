import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Button from '../Button/Button';
import { actions } from '../../constants';
import { smile } from '../../assets';
import Slider from '../Slider/Slider';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import styles from './Action.module.scss';

const Action = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1 className={styles.container__title}>Акции</h1>
        <Slider>
          {actions.map((action, id) => (
            <SwiperSlide
              key={id}
              className={styles['swiper-slide']}
            >
              <div className={styles.slider__container}>
                <div className={styles.container__img}>
                  <img src={smile} alt='smile' />
                </div>
                <div
                  className={styles.slider__container__info}
                >
                  <div
                    className={
                      styles.slider__container__info__title
                    }
                  >
                    {action.title}
                  </div>
                  <div
                    className={
                      styles.slider__container__info__time
                    }
                  >
                    {action.time}
                  </div>
                </div>
                <div>
                  <div
                    className={
                      styles.slider__container__oldPrice
                    }
                  >
                    {action.oldPrice}
                  </div>
                  <div
                    className={
                      styles.slider__container__newPrice
                    }
                  >
                    {action.newPrice}
                  </div>
                  <Button>Записаться</Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
        <div className={styles.container__pagination} />
      </div>
    </React.Fragment>
  );
};

export default Action;
