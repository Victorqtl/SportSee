import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../mockedData/data';

export const mockedUserMainData = id => {
	const currentUserData = USER_MAIN_DATA.find(user => user.id === id);
	return currentUserData ? currentUserData : null;
};

export const mockedUserActivity = userId => {
	const currentUserData = USER_ACTIVITY.find(user => user.userId === userId);
	return currentUserData ? currentUserData : null;
};

export const mockedUserAverageSessions = userId => {
	const currentUserData = USER_AVERAGE_SESSIONS.find(user => user.userId === userId);
	return currentUserData ? currentUserData : null;
};

export const mockedUserPerformance = userId => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(USER_PERFORMANCE.find(user => user.userId === userId));
		}, 1000);
	});
};
