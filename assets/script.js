// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var possibleChar = [];
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=" ];

  // ask user how many characters would they like their password to be
  var userLength = prompt ("How many characters would you like your password to be? Must be between 8 and 128 characters.");
  // if the "userLength" is NOT a valid value, then execute the following statement
  if (userLength === "" || userLength === null || userLength < 8 || userLength > 128) {
    alert("Please select a number between 8 and 128.");
    return generatePassword();
  }

  // if player picks "ok" confirm and go to next question
  var userLower = confirm ("Would you like to include lower case characters in your password?");
  var userUpper = confirm ("Would you like to include upper case characters in your password?");
  var userSpecial = confirm ("Would you like to include special characters in your password?");
  var userNumber = confirm ("Would you like to include numbers in your password?");
  
  var password = [];

    if (userLower) {
    possibleChar = possibleChar.concat(lowerCase);
    console.log(possibleChar);
  }

  if (userUpper) {
    possibleChar = possibleChar.concat(upperCase);
    console.log(possibleChar);
  }

  if (userSpecial) {
    possibleChar = possibleChar.concat(specialChar);
    console.log(possibleChar);
  }

  if (userNumber) {
    possibleChar = possibleChar.concat(number);
    console.log(possibleChar);
  }

  for (var i=0; i < userLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChar.length)
    var randomLetter = possibleChar[randomIndex]; 
    password.push(randomLetter);
  }

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
