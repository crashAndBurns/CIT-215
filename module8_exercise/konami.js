// An array of key strings representing the Konami code
var konamiCode = [
	"ArrowUp","ArrowUp","ArrowDown","ArrowDown",
	"ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
	"KeyB","KeyA"
];

// Create a variable to keep track of where in the Code array
// the user has gotten (integer to represent array index)
let trackingVariable = 0;


// Add an event listener to the 'document' object
// that calls a function on a key down event
document.addEventListener("keydown", checkCharacter);

// Write the function that gets called when a key is down
// (This is where you'll check to see if they have typed
//  the next needed key in the code and all the rest)
//
//  check to see if the character typed equals the next
//  key in the Konami code array (use the index)
//  if so, advance the index by one
//			check to see if they completed the code 
//  if not, reset the index to zero

function checkCharacter(event) {
	let keyPressed = event.code;

	console.log("Key pressed = " + keyPressed);
	
	if (keyPressed === konamiCode[trackingVariable]) {
		trackingVariable++
		if (trackingVariable === konamiCode.length) {
			activateHMTLElements();
			trackingVaraible = 0;
		}
	} else {
		trackingVariable = 0;
	}
	console.log(trackingVariable);
}

function activateHMTLElements() {
	const unorderedListElement0 = "onClick: Executes script when an element is clicked";
	const unorderedListElement1 = "onload: Triggered when the user enters the page";
	const unorderedListElement2 = "onunload: Executes script when user leaves the page";
	const unorderedListElement3 = "oninput: Performs an action when the user inputs data";
	const unorderedListElement4 = "onchange: Executes script when a user changes data in an input";
	const unorderedListElement5 = "onmouseover: Triggered when a user mouses over an element";
	const unorderedListElement6 = "onmouseout: Triggers when user mouses out of an element";
	const unorderedListElement7 = "onfocus: Triggered when an element becomes the focus";

	const unorderedListElementsArray = [
		unorderedListElement0,
		unorderedListElement1,
		unorderedListElement2,
		unorderedListElement3,
		unorderedListElement4,
		unorderedListElement5,
		unorderedListElement6,
		unorderedListElement7,
	];

	const unorderedList = document.createElement("ul")
	let arrayLength = unorderedListElementsArray.length;
	for (let i = 0; i < arrayLength; i++) {
		const listItem = document.createElement("li");
		listItem.textContent = unorderedListElementsArray[i];
		unorderedList.appendChild(listItem);
	}

	document.body.appendChild(unorderedList);

	const para0 = document.createElement("p");
	para0.textContent = "setTimeout() executes a function after waiting \
		a specified amount of time. setInterval() executes a function \
		continuously every so many miliseconds.";
	document.body.appendChild(para0);

	const para1 = document.createElement("p");
	para1.id = "tilNextYear";
	document.body.appendChild(para1);

}

// Create a timer that calls a function every second
// (for the countdown display)
setInterval(timeTilTargetDate, 1000);


// Write the function that gets called every second that
// Updates the countdown display in the HTML element
// Consider using a Date object and getting the numbers
// from there
function timeTilTargetDate() {
	let targetDate = new Date("January 1, 2026 00:00:00").getTime();
	let currentDate = new Date().getTime();
	let distance = targetDate - currentDate;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("tilNextYear").innerHTML = "Time til next year " + 
		days + "d " +
		hours + "h " + minutes + "m " + seconds + "s";

	if (distance < 0) {
		clearInterval(timeTilTargetDate);
		document.getElementById("tilNextYear").innerHTML = "Timer Expired";
	}
}