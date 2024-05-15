// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array from Letters

let lettersArray = Array.from(letters);

// Select Letters Container

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach((letter) => {
	// Create Span
	let span = document.createElement("span");

	// Create Letter Text Node

	let theLetter = document.createTextNode(letter);

	span.appendChild(theLetter);

	// Add Class On Span
	span.classList = "letter-box";

	// append Span To Letter Container
	lettersContainer.appendChild(span);
});

// get random value

// Object Of Words + Categories

const words = {
	programming: [
		"php",
		"javascript",
		"go",
		"scala",
		"fortran",
		"r",
		"mysql",
		"python",
	],
	movies: [
		"Prestige",
		"Inception",
		"Parasite",
		"Interstellar",
		"Whiplash",
		"Memento",
		"Coco",
		"Up",
	],
	people: [
		"Albert Einstein",
		"Hitchcock",
		"Alexander",
		"Cleopatra",
		"Mahatma Gandhi",
	],
	countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// Get Random Property

let allKeys = Object.keys(words);
// console.log(allKeys);

// Random Number Depend On Key Lenght
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
// console.log(randomPropertyNumber);

// Category
let randomPropName = allKeys[randomPropNumber];
// console.log(allKeys[randomPropNumber]);

// Category Words
let randomPropValue = words[randomPropName];
// console.log(randomPropValue);

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// console.log(randomValueNumber);

let randomValueValue = randomPropValue[randomValueNumber];
console.log(randomValueValue);

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element

let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array

let lettersAndSpace = Array.from(randomValueValue);
// console.log(lettersAndSpace);

// Create Spans Depend On Word

lettersAndSpace.forEach((letter) => {
	// Create Empty Span
	let emptySpan = document.createElement("span");
	// If Letter Is Space
	if (letter === " ") {
		// Add Class To The Span
		emptySpan.className = "With-space";
	}
	// Append Spans To The letters Guess Container
	lettersGuessContainer.appendChild(emptySpan);
});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Handle Clicking On Letters

// Set Wrong Attempts
let wrongAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
	// Set The Chose Status
	let theStatus = false;
	if (e.target.className === "letter-box") {
		e.target.classList.add("clicked");
		// Get Clicked Letter
		let theClickedLetter = e.target.innerHTML.toLowerCase();
		//  The Chosen Word
		let theChosenWord = Array.from(randomValueValue.toLowerCase());
		theChosenWord.forEach((wordLetter, wordIndex) => {
			// Check If The Clicked Letter Equal To One Of The Chosen Word Letter
			if (theClickedLetter == wordLetter) {
				// Set Status To Correct
				theStatus = true;
				// Loop On All Guess Spans
				guessSpans.forEach((span, spanIndex) => {
					if (wordIndex === spanIndex) {
						span.innerHTML = theClickedLetter;
					}
				});
			}
		});
		// OutSide loop

		// If Letter Is Wrong
		if (theStatus !== true) {
			// increase The Wrong Attempts
			wrongAttempts++;
			// Add Class Wrong On The Draw Element
			theDraw.classList.add(`wrong-${wrongAttempts}`);

			// Check Wrongs Number
			if (wrongAttempts === 8) {
				endGame();
				lettersContainer.classList.add("finished");
			}
			
		}
	}
});

// End Game Function
function endGame() {
	// Create Popup Div
	let div = document.createElement("div");
	// Create Text In Popup Div
	let divText = document.createTextNode(
		`Game Over, The Word Is ${randomValueValue}`
	);

	// Append Text In div
	div.appendChild(divText);

	// Add Class On Div
	div.className = "popup";
	document.body.appendChild(div);
}
function winGame() {
	// Create Popup Div
	let div = document.createElement("div");
	// Create Text In Popup Div
	let divText = document.createTextNode(
		`Your Win, The Word Is ${randomValueValue}`
	);

	// Append Text In div
	div.appendChild(divText);

	// Add Class On Div
	div.className = "popup-win";
	document.body.appendChild(div);
}
