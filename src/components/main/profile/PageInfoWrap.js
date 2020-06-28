import React from 'react';
import styles from './Profile.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ContactsItems = ({ item, titleItem }) =>
	item ? (
		<div className={styles.contactsItem}>
			<span>{titleItem}</span> {item}
		</div>
	) : (
		''
	);

const PageInfoWrap = ({
	profile,
	defaultAvatar,
	isMyProfile,
	status,
	updateUserStatus,
}) => {
	if (!profile) {
		return <Preloader />;
	}

	const {
		contacts,
		photos,
		fullName,
		aboutMe,
		lookingForAJob,
		lookingForAJobDescription,
	} = profile;
	const {
		facebook,
		website,
		vk,
		twitter,
		instagram,
		github,
		mainLink,
		youtube,
	} = contacts;

	return (
		<div className={styles.pageWrap}>
			<div className={styles.avatar}>
				<img src={photos.large || defaultAvatar} alt="avatar" />
			</div>
			<div className={styles.pageInfoWrap}>
				<div className={styles.pageName}>{fullName}</div>
				<ProfileStatus
					isMyProfile={isMyProfile}
					status={status}
					updateUserStatus={updateUserStatus}
				/>
				<div className={styles.pageInfo}>
					<div className={styles.leftBlock}>
						{aboutMe ? (
							<div className={styles.pageInfoRow}>
								<span>About me:</span> {aboutMe}
							</div>
						) : (
							''
						)}
						<div className={styles.pageInfoRow}>
							<span>Looking for a job:</span> {lookingForAJob ? 'Yes' : 'No'}
						</div>
						{lookingForAJobDescription ? (
							<div className={styles.pageInfoRow}>
								{lookingForAJobDescription}
							</div>
						) : (
							''
						)}
					</div>
					{facebook ||
					website ||
					vk ||
					twitter ||
					instagram ||
					github ||
					mainLink ||
					youtube ? (
						<div className={styles.rightBlock}>
							<div className={styles.contactsTitle}>Contacts:</div>
							{ContactsItems(facebook, 'Facebook:')}
							<ContactsItems item={facebook} titleItem={'Facebook:'} />
							<ContactsItems item={website} titleItem={'Website:'} />
							<ContactsItems item={vk} titleItem={'Vk:'} />
							<ContactsItems item={twitter} titleItem={'Twitter:'} />
							<ContactsItems item={instagram} titleItem={'Instagram:'} />
							<ContactsItems item={github} titleItem={'GitHub:'} />
							<ContactsItems item={mainLink} titleItem={'Main Link:'} />
							<ContactsItems item={youtube} titleItem={'YouTube:'} />
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default PageInfoWrap;
