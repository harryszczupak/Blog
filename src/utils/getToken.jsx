export function getCookie() {
	if (document.cookie !== '') {
		const cookies = document.cookie.split(/; */);

		for (let cookie of cookies) {
			const [cookieName, cookieVal] = cookie.split('=');
			if (cookieName === decodeURIComponent('id')) {
				return decodeURIComponent(cookieVal);
			}
		}
	}

	return null;
}
