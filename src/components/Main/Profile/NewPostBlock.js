import React from 'react';
import styles from './Profile.module.scss';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { TextField } from '@material-ui/core';
import cn from 'classnames';

const NewPostValidatioSchema = yup.object().shape({
	newPostInput: yup.string().required().max(10000),
});

const NewPostBlock = (props) => {
	return (
		<Formik
			initialValues={{
				newPostInput: '',
			}}
			validationSchema={NewPostValidatioSchema}
			onSubmit={(values, actions) => {
				props.addPost(values.newPostInput);
				actions.resetForm();
			}}
		>
			{({ handleSubmit, errors, touched, values }) => (
				<form className={styles.newPostBlock} onSubmit={handleSubmit}>
					<Field
						as={TextField}
						name="newPostInput"
						error={Boolean(errors.newPostInput)}
						placeholder={`What's up?`}
						multiline
						label="New post"
						rowsMax={4}
						className={styles.textField}
					/>
					<div
						className={cn(styles.buttonWrap, {
							[styles.visibleButton]: values.newPostInput,
						})}
					>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							endIcon={<Icon>send</Icon>}
						>
							Add post
						</Button>
					</div>
				</form>
			)}
		</Formik>
	);
};

export default React.memo(NewPostBlock);
