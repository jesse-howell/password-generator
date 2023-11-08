// Assignment code here
var generateBtn = document.querySelector("#generate");
// added function variables
function generatePassword() {
var password = "";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

console.log(password);
return password;

// prompt for series of pwd criteria
// select pwd criteria
// prompt for pwd length
// choose length between 8-128 chars
// ask for char type to include
// confirm lowercase, uppercase, numeric and/or special chars have been included
// to validate input after each prompt, at least one of each char type should be selected
// pwd generated once all prompts meet criteria
// pwd is displayed in alert or written to page
}
// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);