// Assignment code here
// initializers
var generateBtn = document.querySelector("#generate");
// added function variables
function generatePassword() {
var password = "";

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
// added if statements
if (alert ("Please choose from the following criteria.")); {
  
}
  if (!haslowercaseChars || !hasuppercaseChars); {
  alert ("Please choose both uppercase and lowercase characters.");
  }
  if (!hasnumericChars && !hasspecialChars); {
  alert ("Please choose numbers and special characters.");
}
  prompt ("Please select a password length between 8 and 128 characters."); {
    
  }


// for (var i = 0; i < inputLength; i++) {
//   var random = Math.floor(Math.random() * charOptions.length);
//   password += charOptions[random];
// }

// console.log(password);
// return password;

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