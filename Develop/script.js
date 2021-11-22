// Assignment code here

function generatePassword () {


var randomLowerCaseArray = ["a","b","c","d","f","g","f","h","i","o","p","q","r","s","t","u","v","w","x","y","z"]
var randomUpperCaseArray =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var randomNumberArray = ["1","2","3","4","5","6","7","8","9","0"]
var randomSymbolsArray = ["!","@","#","$","%","^","&","*"]


//Prompts for password generator

var confirmLength = prompt ("Please choose between 8-128 characters");
// choice of numbers
var numberschoice = confirm ("Would you like to add numbers?");
// choice of lower case
var lowercase = confirm ("Would you like to add lowercase letters?");
// choice of upercase
var uppercase = confirm ("Would you like to add uppercase letters?");
// choice of symbols
var specialcharacters = confirm ("Would you like to add special characters?");



// if statements for confirm


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

// Add event listener to generate button
function password() generateBtn.addEventListener("click", writePassword); 
