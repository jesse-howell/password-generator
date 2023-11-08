// Assignment code here

// added function variables
function generatePassword() {
var password = "";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "1234567890";
var specialChars = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
var inputLength = 16;
var haslowercaseChars = true;
var hasuppercaseChars = true;
var hasnumericChars = true;
var hasspecialChars = true;
var hasinputLength = true;
// prompt for series of pwd criteria
// select pwd criteria
// prompt for pwd length
// choose length between 8-128 chars
// ask for char type to include
// confirm lowercase, uppercase, numeric and/or special chars have been included
// to validate input after each prompt, at least one of each char type should be selected
// pwd generated once all prompts meet criteria
// pwd is displayed in alert or written to page
// added input variable
var input = prompt("Please select password length and criteria.");
var criteriaSelection;
if (input) {
criteriaSelection = inputLength
}
// for (i = 0; i > 16; i++) {

// }
console.log(password);
return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

