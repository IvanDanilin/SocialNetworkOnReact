import React from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { sendMessage } from '../../../redux/reducers/dialogs-reducer';
import { fullValidation } from '../../../utilities/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';
import styles from './Messages.module.scss';

const CurrentMessages = (props) =>
	props.messages.map((messageEl) => (
		<div key={messageEl.id} className={styles.message}>
			{messageEl.message}
		</div>
	));

const NewMessageForm = (props) => (
	<Form
		onSubmit={(value, form) => {
			props.sendMessage(value.newMessage, props.userId);
			setTimeout(form.reset);
		}}
		render={({ handleSubmit, values }) => (
			<form className={styles.newMessage} onSubmit={handleSubmit}>
				<Field
					component={Textarea}
					name="newMessage"
					placeholder="Enter your message..."
					validate={fullValidation(0, 100)}
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
