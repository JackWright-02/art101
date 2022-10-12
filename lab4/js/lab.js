// Summary. Pseudocoding basic comupter and noncomputer tasks
// Description. Lab 4 Pseudocoding and problem solving
// @link   URL
// @file   This files defines the MyClass class.
// @author Jack Wright
// @since  13/10/22

// Create Wordle:
  // Print the blank word table
    // Print a 5x6 table of blank boxes
    // Generate a 5 letter English word that is only known to the computer
    // Loop through each line
      // Print a, b , c , d , e , f , g , h, i , j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, or z
  // Accept user input
    // Accept alphabetical input
    // Deny non-alphabetical input
  // Validate input acceptability
    // Accept 5 letter English word
    // Deny 5 letter Non-English word
    // Deny nonsensical 5 letter arrangement
  // Test of correct, incorrect, or half-correct condition
    // Loop through each letter in the 5 letter English word
      // Print green box if the letter is correct and in the right space of the word
      // Print yellow box if the letter is correct but in the wrong space of the word
      // Keep blank box if the letter is incorrect and not used in the word
  // Test of win, lose, or move on condition
    // Loop through input line
      // Print win if user input matches the pre generated 5 letter English word
      // Loop to next line down and repeat steps 2-5 if the 5 letter English word inputted does not match the 5 letter English word that was pre generated
      // If loop line > 6, print lose
