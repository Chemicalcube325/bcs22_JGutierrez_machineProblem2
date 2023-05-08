function getRandom(a){
	return Math.floor(Math.random()*a);
};

let chosenNumber = parseInt(getRandom(101));
let userTries = 0;
let userLimit = 10;

while (userTries <= userLimit){
	let userGuess = parseInt(prompt("Input your guess from 1 to 100: "));
	if (userGuess < chosenNumber) {
		alert("Too low, try again. You used " + userTries + " of your " + userLimit + " tries.");
		userTries++;
	} else if (userGuess > chosenNumber) {
		alert("Too High, try again. You used " + userTries + " of your " + userLimit + " tries.");
		userTries++;
	}	else {
		alert("Correct Answer! You guessed the number in " + userTries + " tries!");
		break;
	};
};