/*
 * Author:    Jack Wright
 * Created:   13.10.2022
 * License: Public Domain
 */

window.onload = function () {


var outputEl = document.getElementById("append");

var new1El = document.createElement("p");

new1El.innerHTML = "Buzz";

new1El.id = "new-one";

var new2El = document.createElement("p");

new1El.id = "new-two";

new2El.innerHTML = "Kill";

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

new1El.style.color = "darkred";

new2El.style.color = "darkred";

new1El.style.border = "solid 2px black";

new2El.style.border = "solid 2px black";

}
