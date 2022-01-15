// Assignment code here

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
  //confirm password length by execute passLengthFunc()
  passLengthFunc();


  if(passwordLength < 8 || passwordLength > 128){
    alert("Password length must be at least 8 characters and no more than 128 characters.");
    generatePassword();
  }
  else if( isNaN(passwordLength) ){
    alert("Invalid input. Please insert a number.");
    generatePassword();
  }

  //confirm includding lowercase characters
  var confirmlowerChar = window.confirm("Would you like to include lowercase characters? Click Ok to confirm.");

  //confirm includding lowercase characters
  var confirmUpperChar = window.confirm("Would you like to include uppercase characters? Click Ok to confirm.");

  //confirm includding lowercase characters
  var confirmNumChar = window.confirm("Would you like to include number characters? Click Ok to confirm.");

  //confirm includding lowercase characters
  var confirmSpecialChar = window.confirm("Would you like to include special characters? Click Ok to confirm.");

  //user should confirm at least one character type, show alert if not meet this requirement
  if(!confirmlowerChar && !confirmUpperChar && !confirmNumChar && !confirmSpecialChar){
    alert ("At least one character type should be selected. Please try again.");
  }

  // put all password input in object passwordInput
  var passwordInput = {
    passwordLength: passwordLength,
    confirmlowerChar: confirmlowerChar,
    confirmUpperChar: confirmUpperChar,
    confirmNumChar: confirmNumChar,
    confirmSpecialChar: confirmSpecialChar,
  }
  return passwordInput;
};

function generatePassword(){
  //declare the verifyPassword function
  var verifiyPassword = verifyPassword();

  //declare and store final password in an empty string
  var finalPassword = "";

  //create an array stores all confirm character include in the final password
  var confirmIncludeChar = [];

  //confirm character condition
  //----if include lowercase characters - add to final password
  if (verifiyPassword.confirmlowerChar) {
    confirmIncludeChar = confirmIncludeChar.concat(lowercaseChar);
  }

  //----if include uppercase characters - add to final password
  if (verifiyPassword.confirmUpperChar) {
    confirmIncludeChar = confirmIncludeChar.concat(uppercaseChar);
  }

  //----if include number characters - add to final password
  if (verifiyPassword.confirmNumChar) {
    confirmIncludeChar = confirmIncludeChar.concat(numbersChar);
  }

  //----if include uppercase characters - add to final password
  if (verifiyPassword.confirmSpecialChar) {
    confirmIncludeChar = confirmIncludeChar.concat(specialChar);
  }

  console.log(confirmIncludeChar);

  //generate random character 
  confirmIncludeChar = confirmIncludeChar.sort(() => Math.floor(Math.random() - 0.5));
  console.log(confirmIncludeChar);

  //only return the input password length
  finalPassword = confirmIncludeChar.slice(0, passwordLength);
  console.log(finalPassword);
  
  return finalPassword.join("");
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
