import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	};
	activateEditMode = () => {
		if (this.props.isMyProfile) {
			this.setState({ editMode: true });
		}
	};
	deactivateEditMode = () => {
		this.setState({ editMode: false });
		this.props.updateUserStatus(this.state.status);
	};
	onStatusChange = (e) => {
		this.setState({ status: e.currentTarget.value });
	};
	componentDidUpdate = (prevProps) => {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status });
		}
	};
	render() {
		return (
			<>
				{this.state.editMode ? (
					<div>
						<input
							onChange={this.onStatusChange}
							autoFocus
							onBlur={this.deactivateEditMode}
							value={this.state.status}
						/>
					</div>
				) : (
					<div>
						<span onDoubleClick={this.activateEditMode}>
							{this.props.status || (this.props.isMyProfile && 'Enter your status')}
						</span>
					</div>
				)}
			</>
		);
	}
}

export default ProfileStatus;
