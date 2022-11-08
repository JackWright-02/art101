/*
 * Author:    Jack Wright
 * Created:   2.11.2022
 * License: Public Domain
 */

$("#challenges").append("<button id='first'>Button</button>");

$("#problems").append("<button id='second'>Button</button>");

$("#results").append("<button id='third'>Button</button>");

$("#challenges").click(function(){
  $(this).parent().toggleClass("two");
})

$("#problems").click(function(){
  $(this).parent().toggleClass("one");
})

$("#results").click(function(){
  $(this).parent().toggleClass("three");
})
