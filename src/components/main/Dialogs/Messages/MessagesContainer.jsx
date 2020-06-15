import { onMessageChange, sendMessage } from '../../../../redux/dialogsReduser';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';

const AuthRedirectComponent = withAuthRedirect(Messages);

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogs,
	};
};

const MessagesContainer = connect(mapStateToProps, {
	onMessageChange,
	sendMessage,
})(AuthRedirectComponent);

export default MessagesContainer;
