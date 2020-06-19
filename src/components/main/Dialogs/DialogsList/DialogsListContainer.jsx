import DialogsList from './DialogsList';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { compose } from 'redux';

// Данные из state для передачи в props
const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogs,
	};
};

export default compose(
	connect(mapStateToProps) //withAuthRedirect
)(DialogsList);
