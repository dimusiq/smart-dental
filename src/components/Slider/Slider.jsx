import React from 'react';
import { Swiper } from 'swiper/react';
import styles from './Slider.module.scss';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

// import required modules
import { Pagination } from 'swiper';

const Slider = ({ children }) => {
  return (
    <>
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
        {children}
      </Swiper>
    </>
  );
};

export default Slider;
