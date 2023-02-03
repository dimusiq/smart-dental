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
						onClick={toggler}
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
