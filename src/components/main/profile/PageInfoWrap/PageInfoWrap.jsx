import React from 'react';
import styles from './PageInfoWrap.module.scss';
import Preloader from '../../../common/Preloader/Preloader';

const PageInfoWrap = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div className={styles.pageWrap}>
			<div className={styles.avatar}>
				<img
					src={props.profile.photos.large || props.defaultAvatar}
					alt="avatar"
				/>
			</div>
			<div className={styles.pageInfoWrap}>
				<div className={styles.pageName}>Ivan D.</div>
				<div className={styles.pageInfo}>
					<div className={styles.pageInfoRow}>Date of Birth: 27th of March</div>
					<div className={styles.pageInfoRow}>City: Moscow</div>
					<div className={styles.pageInfoRow}>Education: SFedU'15</div>
				</div>
			</div>
		</div>
	);
};

export default PageInfoWrap;
