person = {name: "Frank", title: "Student", program: "CIT"}
console.log(person.name);

// In json format objects are converted to strings
console.log(JSON.stringify(person));
numbers  = [1, 2, 3, 4 ,5];
console.log(JSON.stringify(numbers));

// json data can be nested
// you cannot define more than one object in a json string
// JSON is language independent

// JSON data types must be
// string, number, object, array, boolean, or null
// can not store function, dates, undefined.

// JSON  Data is plain text so it's very compressable.

// stringify ignores any fields with functions.

// Parse is the opposite of stringify
// going from json > object

const str = JSON.stringify(person);
console.log(str);

const newPerson = JSON.parse(str);
console.log(newPerson);

let curdate= new (Date);
console.log(curdate);

newPerson.now = curdate;
let jdata = JSON.stringify(newPerson);
console.log(jdata);

let newData = JSON.parse(jdata);

newData.now = new Date(newData.now);
console.log(newData);

// next week look at how to communicate with another web server and
// fetch data for us.

// javascript objects are much like python dictionaries
// arrays use an index number to access elements while objects
// are accessed by key name not numbers.  The value is that you can
// give meaning to the values in the object.

// Use . notation or [n] bracket notation to access elements in an object
//  JSON is great for transmitting data across a web based connection
// Used whe one web application needs to obtain data from a remote server
// JSON is the most  common method of transmission.

// fetch might take a moment to get the data we want. WE don't know
// how long it will take to retrieve  the item over the network.
// fetch requests shouldn't hold up the data transmission.
// fetch method is an asynchronous call, happens in the background while
// we move on and do other things.

// fetch() returns a promise, that means the other side will get backto you
// use fetch().then to return a promise with a function of .then. 
// .then is what the promise does when it has finished retrieving the resource
// that we asked for. It returns the whole http response which we don't 
// always want the whole response.
// Call it's method, .text()\
// fetch("https://www.wvncc.edu").then(p => p.text()).then(t => console.log(t));
// chain  what to do with the response from the fetch() method.
// fetch("https://www.wvncc.edu").then(res => res.text()).then(text => console.log(text.length));

// REST API is a web based api where you use urls to fetch or send
// data to a server. The REST API allows you to interact with the data
// on that system. WE usually use json to talk to the rest api.

