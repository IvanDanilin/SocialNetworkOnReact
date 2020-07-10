import React, { useState } from 'react';
import styles from './Profile.module.scss';
import PageInfo from './PageInfo/PageInfo';
import NewPostBlock from './NewPostBlock';
import ExistingPostsBlock from './ExistingPostsBlock';
import PageInfoForm from './PageInfoForm/PageInfoForm';
import useScrollToTop from '../../../utilities/useScrollToTop';

const Profile = ({
	topImage,
	isMyProfile,
	profile,
	defaultAvatar,
	status,
	updateUserStatus,
	addPost,
	existingPosts,
	isAuth,
	changeMyPhoto,
	userId,
	changeUserData,
}) => {
	// Переключатель режима редактирования информации пользователя
	const [pageEditMode, setPageEditMode] = useState(false);
	
	useScrollToTop();

	return pageEditMode ? (
		<PageInfoForm
			setPageEditMode={setPageEditMode}
			profile={profile}
			changeUserData={changeUserData}
		/>
	) : (
		<div className={styles.profile}>
			<div className={styles.topImage}>
				<img src={topImage} alt='cover' />
			</div>
			<div className={styles.contentBlockWrapper}>
				<div className={styles.contentBlock}>
					<PageInfo
						isMyProfile={isMyProfile}
						profile={profile}
						defaultAvatar={defaultAvatar}
						status={status}
						updateUserStatus={updateUserStatus}
						changeMyPhoto={changeMyPhoto}
						userId={userId}
						setPageEditMode={setPageEditMode}
					/>
					<div className={styles.postsBlock}>
						{isAuth ? <NewPostBlock addPost={addPost} /> : ''}
						<ExistingPostsBlock posts={existingPosts} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Profile);
