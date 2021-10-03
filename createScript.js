

var database = [
	{
		username: "User1",
		password: "Password1"
	},
	{
		username: "User2",
		password: "Password2"
	},
	{
		username: "User3",
		password: "Password3"
	}
];

function CreateAccount(username, password){
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === username){
			return true;
		}else{
			return false;
			console.log("Incorrect parameters")
		}
	}
}

function create(username, password){
	if (CreateAccount(username, password)){
		alert("Sorry, username taken.");
	} else{
		alert("Thank you for your time, press Sign-In for more");
		database.push(createUser, createPass);
	}
}

var createUser = prompt("Create a username");
var createPass = prompt("Create a password");


create(createUser, createPass);