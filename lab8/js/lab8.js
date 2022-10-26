/*
 * Author:    Jack Wright
 * Created:   13.10.2022
 * License: Public Domain
 */

function calculateDeezNutzz (x) {
    var results = (((6 + x)*1.7)**2);
    return results;
}
// test our function
console.log("Wanna know how big your nutzz are?", calculateDeezNutzz (5));

var deezNutzz = [24, 69, 3, 3.14, 88];
// test our variables
console.log("My nutzz", deezNutzz);

var deezResults = deezNutzz.map(calculateDeezNutzz);
// map our variable
console.log("Test of bigness:", deezResults);

var deezResultzz = deezNutzz.map(function calculateDeezNutzz (x) {
    var results = Math.sqrt(x)
    return results;
})
// use anon function to callback
console.log("Deeznutzz squared yo:", deezResultzz);
