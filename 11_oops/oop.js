const user = {
    username: "sahil",
    loginCount: 8,
    isLoggedIn: true,
    greet: function () {
        console.log("hello", this.username);
    }
}

console.log(user);
console.log(user.greet());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greet = function () {
        console.log("hello", this.username);
    }

    return this
}

const UserOne = User("sahil", 8, true); // if 🆕 not use this changed 