// Селекторы для получения данных из state
// Используются в mapStateToProps

const { createSelector } = require('reselect');

// Простые селекторы
const getCurrentPageSelector = (state) => state.usersPage.currentPage;
const getUsers = (state) => state.usersPage.users;
const getFollowingInProgressSelector = (state) =>
	state.usersPage.followingInProgress;
const getPageSizeSelector = (state) => state.usersPage.pageSize;
const getTotalUsersCountSelector = (state) => state.usersPage.totalUsersCount;
const getIsFetchingSelector = (state) => state.usersPage.isFetching;

const getProfile = (state) => state.profilePage.profile;
const getStatus = (state) => state.profilePage.status;
const getIsMyProfile = (state) => state.profilePage.isMyProfile;
const getProfilePhotoSmall = (state) =>
	state.profilePage.myProfile.photos.small;
const getProfileExistingPosts = (state) => state.profilePage.existingPosts;

const getIsAuth = (state) => state.auth.isAuth;
const getAuthUserId = (state) => state.auth.userId;
const getAuthLogin = (state) => state.auth.login;

const getDialogs = (state) => state.dialogs;

// Пример сложного селектора, используется для выполнения сложных операций
// Выполняет проверку изменений в части state за которую он отвечает
// Если изменения есть, то передает новые данные в mapStateToProps и
// выполняется render на основе новых данных
const getUsersSelector = createSelector(getUsers, (users) =>
	users.filter((user) => user.userId > 24)
);
// Сложный селектор может принимать несколько других простых
// или сложных селекторов
const superSelector = createSelector(
	getProfile,
	getUsersSelector,
	(value1, value2) => value1 + value2
);
