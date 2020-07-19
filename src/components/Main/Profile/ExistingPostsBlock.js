import React from 'react';
import styles from './Profile.module.scss';
import { Avatar, Box } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const ExistingPostsBlock = (props) => (
	<div className={styles.existingPostsBlock}>
		{props.posts
			.map((el) => (
				<div key={el.id} className={styles.post}>
					<div className={styles.author}>
						<Avatar
							className={styles.avatar}
							src={props.avatar ? props.avatar : props.defaultAvatar}
						/>
						{props.name}
					</div>
					<div className={styles.text}>{el.textPost}</div>
					<Box className={styles.likes} color="primary.main">
						{el.amountLikes ? (
							<>
								{el.amountLikes}<FavoriteIcon />
							</>
						) : (
							<FavoriteBorderIcon />
						)}
					</Box>
				</div>
			))
			.reverse()}
	</div>
);

export default React.memo(ExistingPostsBlock);
