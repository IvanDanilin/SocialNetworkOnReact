import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { sendMessage } from '../../../redux/reducers/dialogsReducer';
import { Textarea } from '../../common/FormControls/FormControls';
import styles from './Messages.module.scss';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

const MessageFormValidationSchema = yup.object().shape({
	newMessage: yup.string(),
});

const CurrentMessages = (props) =>
	props.messages.map((messageEl) => (
		<div key={messageEl.id} className={styles.message}>
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
				<form className={styles.newMessage} onSubmit={handleSubmit}>
					<Field
						as={Textarea}
						name='newMessage'
						placeholder='Enter your message...'
						serverError={errors.newMessage}
						touched={touched.newMessage}
						maxLength='500'
						onKeyDown={onKeyDown}
					/>
					{values.newMessage && <button type='submit'>Send</button>}
				</form>
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
		<div className={styles.messages}>
			<div className={styles.openMessages}>
				<Route
					path={`/dialog/${userId}`}
					render={() => (
						<CurrentMessages messages={props.dialogs[userId].messagesAll} />
					)}
				/>
			</div>
			<div className={styles.newMessageWrap}>
				<div className={styles.emptyBlock}></div>
				<NewMessageForm
					scrollToBottom={scrollToBottom}
					sendMessage={props.sendMessage}
					userId={userId}
				/>
			</div>
		</div>
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
