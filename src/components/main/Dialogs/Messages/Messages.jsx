import React from 'react';
import styles from './Messages.module.scss';
import CurrentMessages from './CurrentMessages/CurrentMessages';
import { Route } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { Textarea } from '../../../common/FormControls/FormControls';
import {
	composeValidators,
	maxLength,
	required,
} from '../../../../utilities/validators/validators';

const NewMessageForm = (props) => (
	<Form
		onSubmit={(value, form) => {
			props.sendMessage(value.newMessage, props.userId);
			setTimeout(form.reset);
			setTimeout(form.resetFieldState('newMessage'));
		}}
		render={({ handleSubmit, values }) => (
			<form className={styles.newMessage} onSubmit={handleSubmit}>
				<Field
					component={Textarea}
					name="newMessage"
					placeholder="Enter your message..."
					validate={composeValidators(
						maxLength(100),
						required()
					)}
					
				/>
				{values.newMessage && <button>Send</button>}
			</form>
		)}
	/>
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
