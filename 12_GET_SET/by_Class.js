// 🆕🆕🆕
// In ES6 2022 js Entroduce # to secure any property by default.

class User {
    constructor(email, password) {
		this._email = email;
		this._password = password;
	}
	
	get email() {
		return this._email.toUpperCase();
	}
}