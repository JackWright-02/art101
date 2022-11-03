/*
 * Author:    Jack Wright
 * Created:   2.11.2022
 * License: Public Domain
 */

 // shuffle array
 // Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 function shuffleArray(array) {
     var currentIndex = array.length, temporaryValue, randomIndex;
     // While there remain elements to shuffle...
     while (0 !== currentIndex) {
         // Pick a remaining element...
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;

         // And swap it with the current element.
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
     }
     return array;
 }

 function reorderUserInput(user) {

   // break input into lower case strings
     var userArray = user.toLowerCase().split('');
   // shuffle array using function above
     var newArray = shuffleArray(userArray);
   // join and return the array
     return newArray.join('');
 }


 // button element
 button = document.getElementById("my-button");
 // form element
 input = document.getElementById("user-name");
 // output element
 output = document.getElementById("output");

 // event listener
 button.addEventListener("click", function(){
   // value
   var userName = input.value;
   // modify value
   var newName = reorderUserInput(userName);
   // output value
   output.innerHTML = "<p id=name-results>" + newName + "</p>";
 });
