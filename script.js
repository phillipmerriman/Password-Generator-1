// Assignment Code
let generateBtn = document.querySelector("#generate");

let lChar = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
let uChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let num = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]

let sChar = [
  "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<","=", ">", "?", "@", "[", "]", "^", "\\", " ", "_", "`", "{", "|", "}", "~"
]

function generatePassword () {
  let finalPw = "";
  pw = [];

  let pwLength = prompt("Choose password length, between 8 - 180:", "8");
  if (pwLength > 7 && pwLength < 181) {
    alert("You chose " + pwLength + " characters.");
  } else {
    pwLength = 8;
    console.log(pwLength);
    alert("You didnt follow the rules. The length of your password will be 8 characters. If you would like to try again, finish going through the prompts, then reload the page.");
  }
  
  let lowerCase = confirm("Characters: Would you like lowercase characters in your password? \nok = yes, cancel = no.");
  
  if (lowerCase === true) {
      pw.push(lChar.join(""));
    
    alert("Lowercase characters will be in the password.");
  } else {
    alert("Lowercase characters will not be in the password.");
  }

  let upperCase = confirm("Characters: Would you like uppercase characters in your password? \nok = yes, cancel = no.");
  
  if (upperCase === true) {
      pw.push(uChar.join(""));
    
    alert("Uppercase characters will be in the password.");
  } else {
    alert("Uppercase characters will not be in the password.");
  }

  let numeric = confirm("Characters: Would you like numeric characters in your password? \nok = yes, cancel = no.");
  
  if (numeric === true) {
      pw.push(num.join(""));
    
    alert("Numeric characters will be in the password.");
  } else {
    alert("Numeric characters will not be in the password.");
  }

  if (lowerCase === false && upperCase === false && numeric === false) {
    alert("Your password will be strictly special characters.");
      pw.push(sChar.join(""));
    
  } else {
    let specialChar = confirm("Characters: Would you like special characters in your password? \nok = yes, cancel = no.");
    
    if (specialChar === true) {
        pw.push(sChar.join(""));
      
      alert("Special characters will be in the password.");
    } else {
      alert("Special characters will not be in the password.");
    }
  }

  
  
  for (let i = 0; i < pwLength; i++) {
    
    
    
    let rand = pw[Math.floor(Math.random() * pw.length)];
    
    
    finalPw += rand[Math.floor(Math.random() * pwLength)];
    
  }
  return finalPw;
}

// Write password to the #password input
function writePassword() {
  

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(typeof(querySelector));