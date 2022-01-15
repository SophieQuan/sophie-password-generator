//SET UP 4 TYPE OF CHARACTERS and LENGTH FOR THE PASSWORD
//--lowercase characters string--
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";

//--uppercase characters string--
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//--number characters string--
var numbersChar = "0123456789";

//--special charcters string--
var specialChar = "~`!@#$%^&*()_+-=[]\;',./{}|:<>?";

//--password length--
var passLengthFunc = function(){
  passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
};

//FUNCTION VERIFY PASSWORD INFO whether or not to include lowercase, uppercase, numeric, and/or special characters
function verifyPassword (){
  debugger;
  //confirm password length
  passLengthFunc();

  if(passwordLength < 8 || passwordLength > 128){
    alert("Password length must be at least 8 characters or no more than 128 characters.");

  }else if( isNaN(passwordLength) ){
    alert("Invalid input. Please insert a number.");
  }
  else{
      //--confirm includding lowercase characters
    var confirmlowerChar = window.confirm("Would you like to include lowercase characters? Click Ok to confirm.");

    //--confirm includding lowercase characters
    var confirmUpperChar = window.confirm("Would you like to include uppercase characters? Click Ok to confirm.");

    //--confirm includding lowercase characters
    var confirmNumChar = window.confirm("Would you like to include number characters? Click Ok to confirm.");

    //--confirm includding lowercase characters
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
};

function generatePassword(){
  //--declare the verifyPassword function
  var confirmedPassword = verifyPassword();

  //--declare and store final password in an empty string
  var finalPassword = "";

  //--stores all confirm character include in the final password
  var confirmIncludeChar = "";

  //confirm character condition
  //--if include lowercase characters - add to final password
  if (confirmedPassword.confirmlowerChar) {
    confirmIncludeChar = confirmIncludeChar.concat(lowercaseChar);
  }

  //--if include uppercase characters - add to final password
  if (confirmedPassword.confirmUpperChar) {
    confirmIncludeChar = confirmIncludeChar.concat(uppercaseChar);
  }

  //--if include number characters - add to final password
  if (confirmedPassword.confirmNumChar) {
    confirmIncludeChar = confirmIncludeChar.concat(numbersChar);
  }

  //--if include uppercase characters - add to final password
  if (confirmedPassword.confirmSpecialChar) {
    confirmIncludeChar = confirmIncludeChar.concat(specialChar);
  }

  console.log(confirmIncludeChar);

  //generate random password with the loop
  for (var i = 0; i < passwordLength; i++){
    var randomChars = Math.floor(Math.random() * confirmIncludeChar.length);
    //console.log(randomChars);
    finalPassword += confirmIncludeChar.charAt(randomChars, randomChars++);
    //console.log(finalPassword);
  }
  return finalPassword;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

