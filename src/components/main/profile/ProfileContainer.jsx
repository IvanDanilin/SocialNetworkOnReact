import React from 'react';
import Profile from './Profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profileReduser';
import topImage from './les_tuman_derevia.jpg';
import defaultAvatar from '../../../assets/image/defaultAvatar.jpg'

class ProfileContainer extends React.Component {
	componentDidMount() {
		Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
			(response) => {
				this.props.setUserProfile(response.data);
			}
		);
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
