// Assignment Code
let generateBtn = document.querySelector("#generate");

//arrays holding available characters for pw
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

//function to generate the password
function generatePassword () {
  //create empty array to add random characters to
  let finalPw = [];
  pw = [];
  let all = [];

  //get length of pw
  let pwLength = prompt("Choose password length, between 8 - 180:", "8");
  if (pwLength > 7 && pwLength < 181 && typeof pwLength === number) {
    alert("You chose " + pwLength + " characters.");
  } else {
    pwLength = 8;
    alert("You didnt follow the rules. The length of your password will be 8 characters. If you would like to try again, finish going through the prompts, then reload the page.");
  }

  //get character types that will be in pw, with if/else statements
  let lowerCase = confirm("Would you like lowercase characters in your password? \nok = yes, cancel = no.");
  
  if (lowerCase === true) {
      pw = pw.concat(lChar);
      // all.push(a random lChar)
    
    alert("Lowercase characters will be in the password.");
  } else {
    alert("Lowercase characters will not be in the password.");
  }

  let upperCase = confirm("Would you like uppercase characters in your password? \nok = yes, cancel = no.");
  
  if (upperCase === true) {
      pw = pw.concat(uChar);
      // all.push(a random uChar)
    
    alert("Uppercase characters will be in the password.");
  } else {
    alert("Uppercase characters will not be in the password.");
  }

  let numeric = confirm("Would you like numeric characters in your password? \nok = yes, cancel = no.");
  
  if (numeric === true) {
    pw = pw.concat(num);
    
    alert("Numeric characters will be in the password.");
  } else {
    alert("Numeric characters will not be in the password.");
  }

  if (lowerCase === false && upperCase === false && numeric === false) {
    alert("Your password will be strictly special characters.");
    pw = pw.concat(sChar);
    
  } else {
    let specialChar = confirm("Would you like special characters in your password? \nok = yes, cancel = no.");
    
    if (specialChar === true) {
      pw = pw.concat(sChar);
      
      alert("Special characters will be in the password.");
    } else {
      alert("Special characters will not be in the password.");
    }
  }

  //push random characters from pw array into finalPw array
  // all = random assortment, one of each type of character guaranteed
  // set finalpassword = all
  for (let i = 0; i < (pwLength - all.length); i++) {

    let rand = pw[Math.floor(Math.random() * pw.length)];
    finalPw.push(rand);
  }

  //return final pw array, turned into a string
  return finalPw.join("");
}
// [l U 0 # ------------]

// Write password to the #password input
function writePassword() {
  

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(typeof(querySelector));