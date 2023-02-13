import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Button/Button';
import { actions } from '../../constants';
import { smile } from '../../assets';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import styles from './Action.module.scss';

// import required modules
import { Pagination } from 'swiper';

const Action = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1 className={styles.container__title}>Акции</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            el: `.${styles.container__pagination}`,
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.swiper}
        >
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
        </Swiper>
        <div className={styles.container__pagination} />
      </div>
    </React.Fragment>
  );
};

export default Action;
