const { default: Axios } = require('axios');

const instance = Axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 'API-KEY': '1fdc6a5f-7401-460e-9a18-ab147850c0d2' },
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
	authorize(data) {
		return instance.post('auth/login', data).then((response) => response.data);
	},
	signOut() {
		return instance.delete('auth/login', ).then((response) => response.data);
	},
};

export const profileAPI = {
	getProfileData(userId) {
		return instance.get(`profile/${userId}`).then((response) => response.data);
	},
	getStatus(userId) {
		return instance
			.get(`profile/status/${userId}`)
			.then((response) => response.data);
	},
	updateStatus(textStatus) {
		return instance
			.put('profile/status/', { status: textStatus })
			.then((response) => response.data);
	},
};
