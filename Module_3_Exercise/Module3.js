/*
 * Name: Flow Control Exercise
 * Author: Frank E. Ciszek
 * Date: 1/27/2025
 * Purpose: Exercise skills in implementing loops, conditional code, and 
 * using the JavaScript debug console. Will also install Node.js to execute
 * javascript in the Ubuntu Termial for WSL. I use the Node.js solution 
 * becasuse I use VS Code and I can have a terminal active in the bottom
 * half of the window. This allows me to quickly execute and evaluate code
 * as I write it. I think that using the console to display error messages
 * or to evaluate how the code runs is a better option than displaying
 * messages in the browser window. This is because as a developer you
 * can write error or evaluation messages to the console and the user
 * does not  see them. This way you can execute code without the user 
 * having to worry about what your messages mean. It's sort of like writing
 * good comments in your code, they help you remember things about what
 * you were writing, and the user doesnt' always know they exist.
 */

// Write a program that iterates through integers form 1 to 100 and prints
// each number using console.log().  But for numbers of three print
// "Multiple of Three". For Multiples of 5 print "Multiple of 5" and
// for numbers of both three and five print "Multiple of Both".

// start for loop becasue we know it will run a fininte number of times.
for (let i = 1; i < 101; i++) {
    // Begin by evaluating the both condition first. Order matters because
    // of short circuit evaluation. If we begin with evaluationg 3 or 5
    // case first the if statement will terminate at the first instance
    // of a number divisible by 3 or 5 but won't evaluate if divisible
    // by both.
    
    // Use the modulo operator to tell if a number is divisiby by 3 or 5
    // If the modulo result is equal to zero then i is divisible by that
    // number.
    // BOTH case
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log (i + " : Multiple of Both");
    // THREE case
    } else if (i % 3 == 0) {
        console.log (i + " : Multiple of Three");
    // FIVE Case
    } else if (i % 5 == 0) {
        console.log (i + " : Multiple of Five")
    // DEFAULT Case if not divisible by both, three, or five.
    } else {
        console.log (i);
    }
    // End for loop
}


