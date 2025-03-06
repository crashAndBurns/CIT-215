// HTML Document Object Model (DOM)
// One large object that represents the entire html document
// You can have objects nested inside other objects
// HTML is boxes inside of boxes, and maps onto the DOM
// 
// JS can access and change all the objects in the DOM
// anything can be accessed by javascript.
// You can even obtain and change CSS styles.
// you can add new html elements and build new code in JS
// write code that responds to activities in an HTML element.
// You can add more events in the DOM

// DOM is the standard in how web browsing works
// HTML elements are objects with properties and methods for accessing them
// as well as events that control them.

// document.getElementById() is an example of accessing the DOM
// find an element with the id of tree, and return the DOM node (element)
// has a property called inner html and you're setting the inner html
// of the element that was fetched by the method.
// there should only be one element with a particular id.

// Finding html elements
// document.getElementById(id) - returns a single element
// document.getElementsByTagName(name) - returns an array of elements
// document.getElementsByClass(name) - Returns an array of elements

// if you use getElemetnsByClass(name) that doesnt exist returns 
// an empty array.

// How to change HTML Elements
//  element.innerHTML = new html content
// element.attribute = new value - change the attribtue value
// of an html element
// element.style.property = new style - change the style of an html element
// element.setAttribute(attribute, value) change the attribute value of 
// an html element.

// NOTE:
// JS uses camel case for css styles because in JS you can't use
// dashes in variable names. CSS styles use  a dash where spaces 
// would be such as text-decoration.

// DOM Navigation
// Need to understand the concept of nodes
// The entire document is a node, which contains a reference to every 
// other html element in the tree.
// The HTML element is an element node
// the text inside the HTML element is a text node
// Every HTML attribtue is an attribute node (deprecated)
// All comments are comment nodes.

// DOM has a parent-child-sibling relationship
// All elements but the root can have exactly one parent
// any node can have any number of children
// sibling nodes have the same parent.
// Textnode is the child of the html element

// JS functoins to navigate between nodes
// parentNode
// childnNode etc

// Creating new nodes
// create a variable that creates a new element
// const para = document.createElement("p");
// create a text node
// const paraText = document.createTextNode("So I instead decided to....");
// add that to the paragraph
// para.appendChil("paraText")
// const ar = document.getElemetnsByTagName("article")[0];
// ar.appendChild("para");

