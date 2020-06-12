import { addPost, onPostChange } from '../../../../redux/profileReduser';
import NewPostBlock from './NewPostBlock';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
	};
};

export default connect(mapStateToProps, { onPostChange, addPost })(
	NewPostBlock
);
