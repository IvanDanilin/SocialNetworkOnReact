import React from 'react';
import styles from './PageInfoWrap.module.scss';
import Preloader from '../../../common/Preloader/Preloader';

const PageInfoWrap = (props) => {
	const profile = props.profile;
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div className={styles.pageWrap}>
			<div className={styles.avatar}>
				<img src={profile.photos.large || props.defaultAvatar} alt="avatar" />
			</div>
			<div className={styles.pageInfoWrap}>
				<div className={styles.pageName}>{profile.fullName}</div>
				<div className={styles.pageInfo}>
					<div className={styles.leftBlock}>
						{profile.aboutMe ? (
							<div className={styles.pageInfoRow}>
								<span>About me:</span> {profile.aboutMe}
							</div>
						) : (
							''
						)}

						<div className={styles.pageInfoRow}>
							<span>Looking for a job:</span>{' '}
							{profile.lookingForAJob ? 'Yes' : 'No'}
						</div>
						{profile.lookingForAJobDescription ? (
							<div className={styles.pageInfoRow}>
								{profile.lookingForAJobDescription}
							</div>
						) : (
							''
						)}
					</div>
					<div className={styles.rightBlock}>
						{profile.contacts.facebook ||
						profile.contacts.website ||
						profile.contacts.vk ||
						profile.contacts.twitter ||
						profile.contacts.instagram ||
						profile.contacts.github ||
						profile.contacts.mainLink ||
						profile.contacts.youtube ? (
							<div className={styles.contactsTitle}>Contacts:</div>
						) : (
							''
						)}
						{profile.contacts.facebook ? (
							<div className={styles.contactsItem}>
								<span>Facebook:</span> {profile.contacts.facebook}
							</div>
						) : (
							''
						)}
						{profile.contacts.website ? (
							<div className={styles.contactsItem}>
								<span>Website:</span> {profile.contacts.website}
							</div>
						) : (
							''
						)}
						{profile.contacts.vk ? (
							<div className={styles.contactsItem}>
								<span>Vk:</span> {profile.contacts.vk}
							</div>
						) : (
							''
						)}
						{profile.contacts.twitter ? (
							<div className={styles.contactsItem}>
								<span>Twitter:</span> {profile.contacts.twitter}
							</div>
						) : (
							''
						)}
						{profile.contacts.instagram ? (
							<div className={styles.contactsItem}>
								<span>Instagram:</span> {profile.contacts.instagram}
							</div>
						) : (
							''
						)}
						{profile.contacts.github ? (
							<div className={styles.contactsItem}>
								<span>GitHub:</span> {profile.contacts.github}
							</div>
						) : (
							''
						)}
						{profile.contacts.mainLink ? (
							<div className={styles.contactsItem}>
								<span>Main Link</span>: {profile.contacts.mainLink}
							</div>
						) : (
							''
						)}
						{profile.contacts.youtube ? (
							<div className={styles.contactsItem}>
								<span>YouTube:</span> {profile.contacts.youtube}
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageInfoWrap;