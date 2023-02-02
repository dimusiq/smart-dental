import React from 'react';
import styles from '../About/About.module.scss';
import { about } from '../../assets/index';

const About = () => {
	return (
		<div className={styles.content}>
			<img
				src={about}
				alt='about'
				className={styles.content__img}
			/>
		</div>
	);
};

export default About;
