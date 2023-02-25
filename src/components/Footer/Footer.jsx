import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from '../Footer/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footer__license}>
          <div>
            <p>Лицензия</p>
            <p>ЛО-77-01-012287</p>
          </div>
          <div>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
        <div className={styles.footer__company__name}>
          <p>ООО «СМАРТ КЛИНИК»</p>
          <p>УСТАНОВКА ЗУБНЫХ ИМПЛАНТОВ</p>
        </div>
        <div className={styles.footer__contacts}>
          <div>+7 (495) 991-91-27</div>
          <div>client@smartclinik.ru</div>
          <div className={styles.social}>
            <div className={styles.social__img}>
              <a href='https://www.instagram.com'>
                <FaInstagram className={styles.icon} />
              </a>
            </div>
            <div className={styles.social__img}>
              <a href='https://web.whatsapp.com/'>
                <FaWhatsapp className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
