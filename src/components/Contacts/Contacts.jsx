import React from 'react';
import {
  YMaps,
  Map,
  Placemark,
} from '@pbe/react-yandex-maps';

const Contacts = () => {
  return (
    <div>
      <div>
        <h1>КОНТАКТЫ</h1>
      </div>
      <section>
        <div>
          <div>+7 (495) 991-91-27</div>
          <div>client@smartclinik.ru</div>
          <div>Москва, улица Новолесная, д. 4</div>
          <div>
            Метро Белорусская, Новослободская, Менделеевская
          </div>
        </div>
        <div>
          <YMaps>
            <Map
              defaultState={{
                center: [55.75, 37.57],
                zoom: 9,
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
          ;
        </div>
      </section>
    </div>
  );
};

export default Contacts;
