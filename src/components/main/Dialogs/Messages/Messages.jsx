import React from 'react';
import styles from './Messages.module.scss';
import CurrentMessages from './CurrentMessages/CurrentMessages';
import { Route } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

const NewMessageForm = (props) => (
	<Form
		initialValues={{ newMessage: '' }}
		onSubmit={(value) => {
			if (value.newMessage) {
				props.sendMessage(value.newMessage, props.userId);
			}
		}}
	>
		{({ handleSubmit }) => (
			<form className={styles.newMessage} onSubmit={handleSubmit}>
				<Field
					component="textarea"
					name="newMessage"
					placeholder="Enter your message..."
				/>
				<button type="submit">Send</button>
			</form>
		)}
	</Form>
);

const Messages = (props) => {
	const userId = props.match.params.userId;
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
				<div></div>
				<NewMessageForm sendMessage={props.sendMessage} userId={userId} />
			</div>
		</div>
	);
};
export default Messages;
