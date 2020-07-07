import React from 'react';
import styles from './Profile.module.scss';
import { Input } from '../../common/FormControls/FormControls';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

const NewPostValidatioSchema = yup.object().shape({
	newPostInput: yup.string().required().max(30),
});

const NewPostBlock = (props) => (
	<Formik
		initialValues={{
			newPostInput: '',
		}}
		validationSchema={NewPostValidatioSchema}
		onSubmit={(values, actions) => {
			props.addPost(values.newPostInput);
			actions.resetForm()
		}}
	>
		{({ handleSubmit, errors, touched }) => (
			<form className={styles.newPostBlock} onSubmit={handleSubmit}>
				<Field
					name='newPostInput'
					as={Input}
					placeholder={`What's up?`}
					error={errors.newPostInput}
					touched={touched.newPostInput}
				/>
				<div className={styles.buttonWrap}>
					<button type='submit'>Add post</button>
				</div>
			</form>
		)}
	</Formik>
);

export default React.memo(NewPostBlock);
