import React from 'react';
import Profile from './Profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profileReduser';
import topImage from './les_tuman_derevia.jpg';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		Axios.get(
			`https://social-network.samuraijs.com/api/1.0/profile/${userId}`
		).then((response) => {
			this.props.setUserProfile(response.data);
		});
	}
	render() {
		return <Profile {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	topImage,
	defaultAvatar,
});

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
	withUrlDataContainerComponent
);
