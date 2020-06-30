import React from 'react';
import styles from './Profile.module.scss';

const ExistingPostsBlock = (props) => (
	<div className={styles.existingPostsBlock}>
		{props.posts.map((el) => (
			<div key={el.id} className={styles.post}>
				<div>{el.textPost}</div>
				<div className={styles.likes}>{el.amountLikes} likes</div>
			</div>
		)).reverse()}
	</div>
);

export default React.memo(ExistingPostsBlock);
