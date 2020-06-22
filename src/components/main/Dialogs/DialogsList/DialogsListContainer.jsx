import { connect } from 'react-redux';
import DialogsList from './DialogsList';
import photo from '../../../../assets/image/myProfilePhoto.jpg';

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogs,
		photo
	};
};

export default connect(mapStateToProps)(DialogsList);
