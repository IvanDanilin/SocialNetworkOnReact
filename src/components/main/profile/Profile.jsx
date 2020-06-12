import React from 'react';
import styles from './Profile.module.scss';
import PageInfoWrap from './PageInfoWrap/PageInfoWrap';
import NewPostBlockContainer from './NewPostBlock/NewPostBlockContainer';
import ExistingPostsBlockContainer from './ExistingPostsBlock/ExistingPostsBlockContainer';

const Profile = (props) => {
	return (
		<div className={styles.profile}>
			<div className={styles.topImage}>
				<img src={props.topImage} alt="cover" />
			</div>
			<div className={styles.contentBlockWrapper}>
				<div className={styles.contentBlock}>
					<PageInfoWrap profile={props.profile} defaultAvatar={props.defaultAvatar} />
					<div className={styles.postsBlock}>
						<NewPostBlockContainer />
						<ExistingPostsBlockContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
