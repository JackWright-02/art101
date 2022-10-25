/*
 * Author:    Jack Wright
 * Created:   13.10.2022
 * License: Public Domain
 */


// sortUserFavoriteFood - a function that takes the user input and sorts the
// letters of their favorite food
    function sortUserFavoriteFood () {
        var favFood = window.prompt("Quick! What's your favorite food?");
        console.log("favFood =", favFood);


        // split string to array
        var foodArray = favFood.split('');
        console.log("foodArray =", foodArray);

        // sort the array
        var foodArraySort = foodArray.sort();
        console.log("foodArraySort =", foodArraySort);

        // join array back to a string
        var foodSorted = foodArraySort.join('');
        console.log("foodSorted =", foodSorted);

        // return function
        return foodSorted;
};


// Output
document.writeln("Your favorite food is now sorted. Voilà!: ", sortUserFavoriteFood(), "</br>");
document.writeln("Sorry but we don't endorse spaces! ^ :)")
