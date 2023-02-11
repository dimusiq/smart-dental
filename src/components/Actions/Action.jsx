import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { actions } from '../../constants';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import styles from './Actions.module.scss';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Action = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.container__title}>Акции</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          {actions.map((action, id) => (
            <SwiperSlide
              key={id}
              className={styles['swiper-slide']}
            >
              <div className={styles.slider__container}>
                <div
                  className={
                    styles.slider__container__title
                  }
                >
                  {action.title}
                </div>
                <p
                  className={
                    styles.slider__container__oldPrice
                  }
                >
                  {action.oldPrice}
                </p>
                <p
                  className={
                    styles.slider__container__newPrice
                  }
                >
                  {action.newPrice}
                </p>
                <p
                  className={styles.slider__container__time}
                >
                  {action.time}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Action;
