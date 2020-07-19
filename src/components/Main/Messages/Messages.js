import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { sendMessage } from '../../../redux/reducers/dialogsReducer';
import styles from './Messages.module.scss';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import cn from 'classnames';
import { Box, TextField } from '@material-ui/core';

const MessageFormValidationSchema = yup.object().shape({
	newMessage: yup.string().max(10),
});

const CurrentMessages = (props) =>
	props.messages.map((messageEl) => (
		<div
			key={messageEl.id}
			className={cn(styles.message, {
				[styles.myMessage]: messageEl.myMessage,
			})}
		>
			{messageEl.message}
		</div>
	));

const NewMessageForm = (props) => (
	<Formik
		initialValues={{ newMessage: '' }}
		validationSchema={MessageFormValidationSchema}
		onSubmit={async (value, actions) => {
			if (value.newMessage) {
				await props.sendMessage(value.newMessage, props.userId);
				actions.resetForm();
				props.scrollToBottom();
			}
		}}
	>
		{({ handleSubmit, values, errors, touched }) => {
			const onKeyDown = (e) => {
				if ((e.ctrlKey || e.altKey) && e.key === 'Enter') {
					handleSubmit();
				}
			};
			return (
				<Box
					component="form"
					className={styles.newMessage}
					onSubmit={handleSubmit}
					bgcolor="primary.main"
				>
					<Field
						className={styles.newMessageField}
						as={TextField}
						name="newMessage"
						placeholder="Enter your message..."
						error={errors.newMessage}
						touched={touched.newMessage}
						onKeyDown={onKeyDown}
						multiline
						rowsMax={4}
						variant="outlined"
					/>
					{values.newMessage && <button type="submit">Send</button>}
				</Box>
			);
		}}
	</Formik>
);

const Messages = (props) => {
	const userId = props.match.params.userId;
	const scrollToBottom = () => {
		window.scrollTo(0, document.body.scrollHeight);
	};
	useEffect(() => {
		scrollToBottom();
	}, []);
	return (
		<Box className={styles.messages} bgcolor="primary.light">
			<Route
				path={`/dialog/${userId}`}
				render={() => (
					<CurrentMessages messages={props.dialogs[userId].messagesAll} />
				)}
			/>
			<div className={styles.newMessageWrap}>
				<div className={styles.emptyBlock}></div>
				<NewMessageForm
					scrollToBottom={scrollToBottom}
					sendMessage={props.sendMessage}
					userId={userId}
				/>
			</div>
		</Box>
	);
};

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogs,
	};
};

export default compose(
	connect(mapStateToProps, {
		sendMessage,
	}),
	withRouter,
	withAuthRedirect
)(Messages);
