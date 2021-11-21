// Assignment code here


var randomLowerCase = ["a","b","c","d","f","g","f","h","i","o","p","q","r","s","t","u","v","w","x","y","z"]
var randomUpperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var randomNumber = ["1","2","3","4","5","6","7","8","9","0"]
var randomSymbols = ["!","@","#","$","%","^","&","*"]


//Prompts for password generator

function generatePassword() {
 // length of password
var confirmLength = prompt("Please choose between 8-128 characters");
// choice of numbers
var numberschoice = prompt("Would you like to add numbers?");
// choice of lower case
var lowercase = prompt("Would you like to add lowercase letters?");
// choice of upercase
var uppercase = prompt ("Would you like to add uppercase letters?");
// choice of symbols
var specialcharacters = prompt ("Would you like to add special characters?");


 

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

