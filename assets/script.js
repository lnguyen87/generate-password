// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var possibleChar = [];
  var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h"];
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var userLength = prompt ("How many characters would you like your password? Must be between 8 and 128 characters.");
  var userLower = confirm ("Would you like to include lower case characters in your password?");
  var userUpper = confirm ("Would you like to include upper case characters in your password?");
  var userSpecial = confirm ("Would you like to include special characters in your password?");
  var userNumber = confirm ("Would you like to include numbers in your password?");
  var password = [];

  if (userLower) {
    possibleChar = possibleChar.concat(lowerChar);
  }
  if (userUpper) {
    possibleChar = possibleChar.concat(upperChar);
  }
  if (userSpecial) {
    possibleChar = possibleChar.concat(specialChar);
  }
  if (userNumber) {
    possibleChar = possibleChar.concat(numberChar);
  }
  for (var i=0; i <= userLength; i++) {
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
