import React from 'react';
import styles from './NewPostBlock.module.scss';

const NewPostBlock = (props) => {
	const changeNewPostText = (event) => {
		const text = event.target.value;
		props.onPostChange(text);
	};

	return (
		<div className={styles.newPostBlock}>
			<input
				onChange={changeNewPostText}
				placeholder="What&#39;s up?"
				value={props.newPostText}
			/>
			<div className={styles.buttonWrap}>
				<button type="submit" onClick={props.addPost}>
					Add post
				</button>
			</div>
		</div>
	);
};

export default NewPostBlock;
