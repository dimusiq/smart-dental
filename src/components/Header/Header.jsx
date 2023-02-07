import { useState } from 'react';
import { logo, tel } from '../../assets';
import { navLinks } from '../../constants';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => setToggle((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>
            <img src={logo} alt='' />
          </span>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button>Звонок</Button>
          </div>
          <button
            className={styles.header__toggler}
            onClick={toggler}
          >
            {!toggle ? (
              <BiMenuAltRight />
            ) : (
              <AiOutlineCloseSquare />
            )}
          </button>
        </div>
      </div>
      <nav
        className={`${styles.nav} ${
          toggle ? styles[`nav--open`] : {}
        }`}
      >
        {navLinks.map((link, id) => (
          <li key={id} className={styles.nav__item}>
            <a href={link.id}>{link.title}</a>
          </li>
        ))}

        <div className={styles.nav__button__container}>
          <Button>Звонок</Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
