import React from 'react';
import styles from '../About/About.module.scss';
import { about } from '../../assets/index';

const About = () => {
	return (
		<div>
			<img
				src={about}
				alt='about'
				className={styles.background}
			/>
		</div>
	);
};

export default About;
