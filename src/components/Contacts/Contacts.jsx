import React from 'react';
import {
  YMaps,
  Map,
  Placemark,
} from '@pbe/react-yandex-maps';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h1>КОНТАКТЫ</h1>
      </div>
      <section className={styles.section}>
        <div>
          <div>+7 (495) 991-91-27</div>
          <a href='client@smartclinik.ru'>
            client@smartclinik.ru
          </a>
          <div>Москва, улица Новолесная, д. 4</div>
          <div>
            Метро Белорусская, Новослободская, Менделеевская
          </div>
        </div>
        <div className={styles.map}>
          <YMaps>
            <Map
              defaultState={{
                center: [55.75, 37.57],
                zoom: 8,
                controls: [
                  'zoomControl',
                  'fullscreenControl',
                ],
              }}
              modules={[
                'control.ZoomControl',
                'control.FullscreenControl',
              ]}
            >
              <Placemark defaultGeometry={[55.75, 37.57]} />
            </Map>
          </YMaps>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
