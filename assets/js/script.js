// Assignment code here

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//SET UP 4 TYPE OF CHARACTERS and LENGTH FOR THE PASSWORD
//----lowercase characters array
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//----uppercase characters array
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//----number characters array
var numbersChar = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9];

//----special charcters array""
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "{", "}", "|", "\\", "[", "]", ":", ";", "'", "<", ">", ",", ".", "?", "/", "`"];

//----password length
var passLengthFunc = function(){
  passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
};

//FUNCTION VERIFY PASSWORD INFO whether or not to include lowercase, uppercase, numeric, and/or special characters
function verifyPassword (){
  if(passwordLength < 8 || passwordLength > 128){
    alert("Password length must be at least 8 characters and no more than 128 characters.");
    generatePassword();
  }
  else if( isNaN(passwordLength) ){
    alert("Invalid input. Please insert a number.");
    generatePassword();
  } 
  else{
    generatePassword();
  };


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
