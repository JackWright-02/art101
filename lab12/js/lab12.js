/*
 * Author:    Jack Wright
 * Created:   2.11.2022
 * License: Public Domain
 */

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return gryffindor
  }
  else if (mod == 1) {
    return ravenclaw
  }
  else if (mod == 2) {
    return slytherin
  }
  else if (mod == 3) {
    return hufflepuff
  }
}

$("#button").click(function(){
   var name = $("#input").val();
   var house = sortingHat(name);
   $("#output").html("<h1>" + house + "</h1>");
 })

  var gryffindor = "Gryffindor: If the Sorting Hat placed you here, you would have demonstrated qualities like courage, bravery and determination. Some of the wizarding worlds best and brightest belonged to this house. Harry Potter and Albus Dumbledore are just a couple that spring to mind!";
//    console.log(gryffindor)
  var hufflepuff = "Hufflepuff: If you were lucky enough to be sorted into this house, we can imagine you are the type of person who has a strong moral compass, always works hard, is the most loyal friend, knows it is the taking part that counts and always has the best snacks.";
//    console.log(hufflepuff)
  var ravenclaw = "Ravenclaw: The Sorting Hat would only put you in this house if you demonstrated excellent wisdom, wit and a skill for learning. Ravenclaws are often known for being quite eccentric and most of the great wizarding inventors and innovators have come from this house.";
//    console.log(ravenclaw)
  var slytherin = "Slytherin: If the Sorting Hat placed you in this noble house, then you are most likely ambitious, shrewd and possibly destined for greatness. We can imagine you are the kind of person who is always one step ahead, has a dark sense of humour, thinks reputation is important, takes pride in their appearance and does not let anyone see their soft side.";
//    console.log(slytherin)
