import DialogsList from './DialogsList';
import { getCurrentId } from '../../../../redux/dialogsReduser';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { compose } from 'redux';


// Данные из state для передачи в props
const mapStateToProps = (state) => {
	return {
		dialogsData: state.dialogs.dialogsData,
	};
};


export default compose(
	connect(mapStateToProps, { getCurrentId }),
	withAuthRedirect
)(DialogsList);


