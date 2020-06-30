import React from 'react';
import styles from './Profile.module.scss';
import PageInfoWrap from './PageInfoWrap';
import NewPostBlock from './NewPostBlock';
import ExistingPostsBlock from './ExistingPostsBlock';

const Profile = ({
	topImage,
	isMyProfile,
	profile,
	defaultAvatar,
	status,
	updateUserStatus,
	addPost,
	existingPosts,
}) => {
	return (
		<div className={styles.profile}>
			<div className={styles.topImage}>
				<img src={topImage} alt="cover" />
			</div>
			<div className={styles.contentBlockWrapper}>
				<div className={styles.contentBlock}>
					<PageInfoWrap
						isMyProfile={isMyProfile}
						profile={profile}
						defaultAvatar={defaultAvatar}
						status={status}
						updateUserStatus={updateUserStatus}
					/>
					<div className={styles.postsBlock}>
						<NewPostBlock addPost={addPost} />
						<ExistingPostsBlock posts={existingPosts} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Profile);
