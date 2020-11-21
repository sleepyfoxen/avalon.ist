function getProfile(io, socket) {
	socket.on('getProfile', (username) => {
		// eslint-disable-next-line no-undef
		const userQ = new Parse.Query('_User');
		userQ.equalTo('username', username);

		userQ.first({ useMasterKey: true }).then((u) => {
			if (u) {
				socket.emit('saveProfile', u.toProfilePage());
			} else {
				socket.emit('profileNotFound');
			}
		});
	});
}

module.exports = getProfile;
