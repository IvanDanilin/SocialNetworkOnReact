import React from 'react';
import styles from './Profile.module.scss';
import { Form, Field } from 'react-final-form';
import { fullValidation } from '../../../utilities/validators/validators';
import { Input } from '../../common/FormControls/FormControls';

const NewPostBlock = (props) => (
	<Form
		onSubmit={(values, form) => {
			props.addPost(values.newPostInput);
			setTimeout(form.restart);
		}}
		render={({ handleSubmit }) => (
			<form className={styles.newPostBlock} onSubmit={handleSubmit}>
				<Field
					name="newPostInput"
					component={Input}
					validate={fullValidation('', 1000, 'Enter the text of your message')}
					placeholder={`What's up?`}
				/>
				<div className={styles.buttonWrap}>
					<button type="submit">Add post</button>
				</div>
			</form>
		)}
	/>
);

export default React.memo(NewPostBlock);
