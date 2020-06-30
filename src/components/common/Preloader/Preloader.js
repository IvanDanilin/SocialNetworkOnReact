import React from 'react';
import loadingImage from './preloader.svg';
import styles from './Preloader.module.scss';

// Прелодер для отображения во время ожидания (загрузка данных и тп.)
const Preloader = () => {
	return (
		<div className={styles.preloader}>
			<img src={loadingImage} alt="Loading..." />
		</div>
	);
};

export default Preloader;
