import React from 'react';
import styles from './NewPostBlock.module.scss';
import { Form, Field } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';

const NewPostBlock = (props) => (
	<Form
		initialValues={{ newPostInput: props.newPostText }}
		onSubmit={() => {
			props.addPost();
		}}
	>
		{({ handleSubmit }) => (
			<form className={styles.newPostBlock} onSubmit={handleSubmit}>
				<Field
					name="newPostInput"
					placeholder="What&#39;s up?"
					component="input"
				/>
				<OnChange name="newPostInput">
					{(value, previous) => {
						if (value !== previous) {
							props.onPostChange(value);
						}
					}}
				</OnChange>
				<div className={styles.buttonWrap}>
					<button type="submit">Add post</button>
				</div>
			</form>
		)}
	</Form>
);

export default NewPostBlock;
