var input = document.getElementById("timelineInput");
var button = document.getElementById("sendToTimeline");


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

var newsfeed = [
	{
		username: "User3",
		timeline: "Hey User1! How are you?"
	},
	{
		username: "User1",
		timeline: "Amazing!!"
	},
	{
		username: "User3",
		timeline: "That's great!!"
	}
];

function  inputLength(){
	return input.value.length;
}


function isUserValid(username, password){
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		}else{
			return false;
			console.log("Incorrect parameters")
		}
	}
}

function signIn(username, password) {
	if(isUserValid(username, password)){
		console.log(newsfeed);
	} else{
		alert("Sorry, wrong username/password")
	}
}

function personalAccountMark(){
	document.getElementById("accountName").textContent = usr;
}

function timelineInput(){
	if(inputLength() > 0){
		addToTimeline()
	}else{
		alert("Cannot post empty statements to timeline!")
		document.getElementById("timelineInput").textContent = "";
	}
}

function addToTimeline(){
	newsfeed.push(usr, input.value)
}


var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
var usr = usernamePrompt

signIn(usernamePrompt, passwordPrompt);
personalAccountMark();
button.addEventListener("click", timelineInput)