// Assignment code here
var generateBtn = document.querySelector("#generate");
// added function variables
function generatePassword() {
var password = "";

var passwordCriteria = [lowercaseChars, uppercaseChars, numericChars, specialChars];
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
// added uppercase letters
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// added numeric characters
var numericChars = "1234567890";
// added specialChars
var specialChars = "!?/-_*{}[]|@^<>,.()%#$&`~"

// added input values
// Char input values
var inputLength = 8;
var haslowercaseChars = true;
var hasuppercaseChars = true;
var hasnumericChars = true;
var hasspecialChars = true;


// prompt for series of pwd criteria
// select pwd criteria
// prompt for pwd length
// choose length between 8-128 chars
// ask for char type to include
// confirm lowercase, uppercase, numeric and/or special chars have been included
// to validate input after each prompt, at least one of each char type should be selected
// pwd generated once all prompts meet criteria
// pwd is displayed in alert or written to page
if (!haslowercaseChars && !hasuppercaseChars); {
  alert ("Please choose both uppercase and lowercase characters.");
  }
for (var i = 0; i < inputLength; i++) {
  var random = Math.floor(Math.random() * lowercaseChars.length);
  password += lowercaseChars[random];
}

// added uppercase for loop and if statement
for (var i = 0; i < inputLength; i++) {
  var random = Math.floor(Math.random() * uppercaseChars.length);
  password += uppercaseChars[random];
}
// added numeric for loop
for (var i = 0; i < inputLength; i++) {
  var random = Math.floor(Math.random() * numericChars.length);
  password += numericChars[random];
}
// added specialChar for loop
for (var i = 0; i < inputLength; i++) {
  var random = Math.floor(Math.random() * specialChars.length);
  password += specialChars[random];
}

console.log(password);
return password;

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