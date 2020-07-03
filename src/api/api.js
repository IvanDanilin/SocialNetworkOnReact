const { default: Axios } = require('axios');

const instance = Axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 'API-KEY': '518405bc-aa9c-4a48-a2e6-601627969783' },
});

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data);
	},
	follow(id) {
		return instance
			.post(`follow/${id}`)
			.then((response) => response.data.resultCode);
	},
	unfollow(id) {
		return instance
			.delete(`follow/${id}`)
			.then((response) => response.data.resultCode);
	},
};

export const authAPI = {
	getAuthUserData() {
		return instance.get('auth/me').then((response) => response.data);
	},
	signIn(data) {
		return instance.post('auth/login', data).then((response) => response.data);
	},
	signOut() {
		return instance.delete('auth/login').then((response) => response.data);
	},
};

export const profileAPI = {
	getProfileData(userId) {
		return instance
			.get(`profile/${userId}`)
			.then((response) => (response.status === 200 ? response.data : false));
	},
	getStatus(userId) {
		return instance
			.get(`profile/status/${userId}`)
			.then((response) => (response.status === 200 ? response.data : false));
	},
	updateStatus(textStatus) {
		return instance
			.put('profile/status/', { status: textStatus })
			.then((response) => response.data);
	},
	changeMyPhoto(file) {
		const formData = new FormData();
		formData.append('image', file);
		return instance
			.put('profile/photo', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			.then((response) => response);
	},
};
