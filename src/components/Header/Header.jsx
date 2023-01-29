import { useState } from 'react';
import { logo } from '../../assets';
import { navLinks } from '../../constants';
import Button from '../Button/Button';
import styles from './Header.module.scss';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className={styles.header}>
			<header className={styles.header__content}>
				<div>
					<a href='/'>
						<img src={logo} alt='logo' />
					</a>
				</div>
				<div>
					<nav className={styles.nav}>
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
				</div>
				<div>
					<div
						className={styles.header__button__container}
					></div>
					<Button
						className={styles.header__toggler}
					></Button>
				</div>
			</header>
		</div>
	);
};

export default Header;
