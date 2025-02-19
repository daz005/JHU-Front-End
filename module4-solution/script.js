// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function () {

console.log("-------1: the first time print out ------------");

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Loop over the names array and say either 'Hello' or "Good Bye"
// using either the helloSpeaker's or byeSpeaker's 'speak' method.
// See Lecture 50, part 1
for (var i = 0; i < names.length; i++) {

  // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
  var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
    //console.log(byeSpeaker.speakSimple(names[i]));
  } else {
    helloSpeaker.speak(names[i]);
    //console.log(helloSpeaker.speakSimple(names[i]));
  }
}


// In the main script.js, use the map function to create an array based on the names array. 
// This array will contain the greetings based on the names with the same rules as implemented previously.
// The function passed into the map function should not be an inline function, i.e., 
// separate it into its own named function and pass it into the map function as a value.
// The end result should be that the list prints out twice in the browser console after you complete this part.
var mapCallBackFun = function (name) {
  var firstLetter = name.charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    return byeSpeaker.speakSimple(name);
  } else {
    return helloSpeaker.speakSimple(name);
  }
};

console.log("-------2: the second time print out ------------");
var greetings = names.map(mapCallBackFun);
for (var i = 0; i < greetings.length; i++) {
  console.log(greetings[i]);
};




console.log("-------3(Bonus/Optional) : the third time print out ------------");
var initialValue = {hello: [], bye: []};
var reduceCallBackFun = function (accumulator, name) {
  var firstLetter = name.charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    accumulator.bye.push(byeSpeaker.speakSimple(name));
  } else {
    accumulator.hello.push(helloSpeaker.speakSimple(name));
  }
  return accumulator;
};

var greetings = names.reduce(reduceCallBackFun,initialValue);
//console.log(greetings);

for (var i = 0; i < greetings.hello.length; i++) {
  console.log(greetings.hello[i]);
};

for (var i = 0; i < greetings.bye.length; i++) {
  console.log(greetings.bye[i]);
};

})();
