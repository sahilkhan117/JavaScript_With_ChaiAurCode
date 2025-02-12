// Inheritence: Inheritence is a mechanism in which a new class is created from an existing class. The new class is called the derived class and the existing class is called the base class. The derived class inherits all the features from the base class and can have additional features of its own.

// Make a top parent level class
class User {
	constructor(username) {
		this.username = username;
	}

	logMe() {
		console.log(`Log Me ${this.username}`);
	}
}

// Make a child class of User
class Teacher extends User {
	constructor(username, email, password) {
		super(username);
		// this will we call the parent class construcor and also give the 'this' access

		this.email = email;
		this.password = password;
	}

	addCourse() {
		console.log(`A new Course added by ${this.username}`);
	}
}

const chai = new Teacher("Sahil", "sahil@ms.com", "786")
chai.logMe()
chai.addCourse()

const Masala = new User("Masala")
// Masala.addCourse() // not accses 😤
Masala.logMe()


// ⚡ instanceof use for check the instance
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

console.log(Masala instanceof Teacher); // False 😯
console.log(Masala instanceof User);

console.log(Teacher instanceof User); // false 😶‍🌫️ 💫
console.log(User instanceof Teacher); // false 😶‍🌫️ 💫
