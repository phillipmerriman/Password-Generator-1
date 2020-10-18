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
  //create empty array for a placeholder for character type arrays
  let pw = [];
  //create empty array to make sure specified character types will end up in final password
  let all = [];

  //get length of pw
  let pwLength = prompt("Choose password length, between 8 - 128:", "8");
  if (pwLength > 7 && pwLength < 129 && isNaN("pwLength"/10)) {
    alert("You chose " + pwLength + " characters.");
  } else {
    pwLength = 8;
    alert("You didnt follow the rules. The length of your password will be 8 characters. If you would like to try again, finish going through the prompts, then reload the page.");
  }

  //get character types that will be in pw, with if/else statements
  //make variable to confirm whether or not user wants lowercase characters in password
  let lowerCase = confirm("Would you like lowercase characters in your password? \nok = yes, cancel = no.");
  //if user chose to add lowercase to final password, add lowercase character(s) to password
  if (lowerCase === true) {
      //add the whole lChar array to pw array
      pw = pw.concat(lChar);
      //add a random lowercase character to the all array to make sure a lowercase will end up in the final pw. - all.push(a random lChar)
      all.push(lChar[Math.floor(Math.random() * lChar.length)]);
      //alert the user if lowercase characters will be in the password
    alert("Lowercase characters will be in the password.");
  } else {
    //alert the user if lowercase will NOT be in the password
    alert("Lowercase characters will not be in the password.");
  }
  //repeat for uppercase, numeric, and special characters
  let upperCase = confirm("Would you like uppercase characters in your password? \nok = yes, cancel = no.");
  
  if (upperCase === true) {
      pw = pw.concat(uChar);
      // all.push(a random uChar)
      all.push(uChar[Math.floor(Math.random() * uChar.length)]);
    
    alert("Uppercase characters will be in the password.");
  } else {
    alert("Uppercase characters will not be in the password.");
  }

  let numeric = confirm("Would you like numeric characters in your password? \nok = yes, cancel = no.");
  
  if (numeric === true) {
    pw = pw.concat(num);
    all.push(num[Math.floor(Math.random() * num.length)]);
    
    alert("Numeric characters will be in the password.");
  } else {
    alert("Numeric characters will not be in the password.");
  }

  if (lowerCase === false && upperCase === false && numeric === false) {
    alert("Your password will be strictly special characters.");
    pw = pw.concat(sChar);
    all.push(sChar[Math.floor(Math.random() * sChar.length)]);
    
  } else {
    let specialChar = confirm("Would you like special characters in your password? \nok = yes, cancel = no.");
    
    if (specialChar === true) {
      pw = pw.concat(sChar);
      all.push(sChar[Math.floor(Math.random() * sChar.length)]);
      
      alert("Special characters will be in the password.");
    } else {
      alert("Special characters will not be in the password.");
    }
  }

  //push random characters from pw array into finalPw array
  // all = random assortment, one of each type of character guaranteed
  // set finalpassword = all
  finalPw = finalPw.concat(all);
  for (let i = 0; i < (pwLength - all.length); i++) {
    let rand = pw[Math.floor(Math.random() * pw.length)];
    finalPw.push(rand);
  }
  
  //randomize finalPw 
  shuffle(finalPw);
  
  //return final pw array, turned into a string
  return finalPw.join("");
}
//randomize function (Fisher-Yates shuffle: https://bost.ocks.org/mike/shuffle/ )
function shuffle (array) {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
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