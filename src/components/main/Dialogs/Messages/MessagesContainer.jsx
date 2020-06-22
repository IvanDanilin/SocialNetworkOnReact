import { sendMessage } from '../../../../redux/reducers/dialogs-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

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
