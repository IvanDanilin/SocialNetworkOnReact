import React from 'react';
import styles from './Profile.module.scss';
import PageInfoWrap from './PageInfoWrap';
import NewPostBlock from './NewPostBlock';
import ExistingPostsBlock from './ExistingPostsBlock';

const Profile = (props) => {
	return (
		<div className={styles.profile}>
			<div className={styles.topImage}>
				<img src={props.topImage} alt="cover" />
			</div>
			<div className={styles.contentBlockWrapper}>
				<div className={styles.contentBlock}>
					<PageInfoWrap
						isMyProfile={props.isMyProfile}
						profile={props.profile}
						defaultAvatar={props.defaultAvatar}
						status={props.status}
						updateUserStatus={props.updateUserStatus}
					/>
					<div className={styles.postsBlock}>
						<NewPostBlock addPost={props.addPost} />
						<ExistingPostsBlock posts={props.existingPosts} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Profile);
