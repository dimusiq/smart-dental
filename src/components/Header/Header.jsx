import { useState } from 'react';
import { logo, tel } from '../../assets';
import { navLinks } from '../../constants';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const menuToggler = () => setToggle((prev) => !prev);

	return (
		<div className={styles.header}>
			<header className={styles.header__content}>
				<div className={styles.header__logo}>
					<a href='/'>
						<img src={logo} alt='logo' />
					</a>
				</div>
				<nav
					className={`${styles.nav} ${
						toggle ? styles[`nav--open`] : {}
					}`}
				>
					{navLinks.map((link, id) => (
						<li key={id}>
							<a
								className={styles.nav__item}
								href={link.id}
							>
								{link.title}
							</a>
						</li>
					))}
				</nav>
				<div className={styles.header__button__container}>
					<img src={tel} alt='tel' />
					<a href='tel:+7(495)991-91-27'>
						+7 (495) 991-91-27
					</a>
				</div>
				<div className={styles.header__btn__open}>
					<Button
						className={styles.header__toggler}
						onClick={menuToggler}
					>
						{!toggle ? (
							<BiMenuAltRight />
						) : (
							<AiOutlineCloseSquare />
						)}
					</Button>
				</div>
			</header>
		</div>
	);
};

export default Header;
