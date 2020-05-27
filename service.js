// 管理账号信息
const USERS_KEY = 'user';
const STATE_KEY = 'STATE_KEY';

const getUsers = function() {
	let ret = '';
	ret = uni.getStorageSync(USERS_KEY);
	if (!ret) {
		ret = '[]';
	}
	return JSON.parse(ret);
}

const addUser = function(userInfo) {
	let users = {userName: userInfo.username, token: userInfo.token};
	uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

export default {
	getUsers,
	addUser
}
