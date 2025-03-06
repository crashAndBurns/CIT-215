// downloads a random joke using a fetch call in REST API

let jokeData = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

function printJoke(joke) {
    // console.log(joke)
    if (joke.type == "single") {
        console.log(joke.joke);
    } else {
        console.log(joke.setup);
        console.log("\n...");
        console.log(joke.delivery);
    }
}

// function getResponseText(res) {
//     return (res.text());
// }

// JS short-short-short version function:
// Passes one parameter as parameter name and  returns result
// of  the statement.
// parameterName => statement(parameterName);

fetch(jokeData) // returns a web response object
    .then(res => res.text()) // returns json string/text of response parameter => what the function returns
    .then(text => JSON.parse(text)) // converts JSON to an object and returns it
    .then(printJoke); // prints the details of the object.