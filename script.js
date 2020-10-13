// Assignment Code
let generateBtn = document.querySelector("#generate");

let lChar = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
let uChar = lChar.toUpperCase();
let num = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]
let sChar = [
  '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<','=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'
]

// Write password to the #password input
function writePassword() {

  let pwLength = prompt("Choose password length, between 8 - 180:", "ex. '69'");
  if (pwLength > 7 && pwLength < 181) {
    alert("You chose " + pwLength + " characters.");
  } else {
    alert("Please choose a password length between 8 - 180.");
  }
  
  let lowerCase = confirm("Characters: Would you like lowercase characters in your password? \nok = yes, cancel = no.");
  console.log(lowerCase);
  if (lowerCase === true) {
    alert("Lowercase characters will be in the password.");
  } else {
    alert("Lowercase characters will not be in the password.");
  }

  let upperCase = confirm("Characters: Would you like uppercase characters in your password? \nok = yes, cancel = no.");
  console.log(upperCase);
  if (upperCase === true) {
    alert("Uppercase characters will be in the password.");
  } else {
    alert("Uppercase characters will not be in the password.");
  }

  let numeric = confirm("Characters: Would you like numeric characters in your password? \nok = yes, cancel = no.");
  console.log(numeric);
  if (numeric === true) {
    alert("Numeric characters will be in the password.");
  } else {
    alert("Numeric characters will not be in the password.");
  }

  if (lowerCase === false && upperCase === false && numeric === false) {
    alert("Your password will be strictly special characters.")
    let specialChar = true;
  } else {
    let specialChar = confirm("Characters: Would you like special characters in your password? \nok = yes, cancel = no.");
    console.log(specialChar);
    if (specialChar === true) {
      alert("Special characters will be in the password.");
    } else {
      alert("Special characters will not be in the password.");
    }
  }

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(typeof(querySelector));