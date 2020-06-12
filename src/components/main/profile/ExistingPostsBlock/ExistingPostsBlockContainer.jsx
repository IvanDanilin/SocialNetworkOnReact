import ExistingPostsBlock from './ExistingPostsBlock';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		existingPosts: state.profilePage.existingPosts,
	};
};

export default connect(mapStateToProps)(ExistingPostsBlock);
