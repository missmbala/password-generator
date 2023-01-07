// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//var characterUppercase = document.getElementById('upperCasedCharacters');
//var characterSpecial = document.getElementById('specialCharacters'); 
//var characterNumbers = document.getElementById('numericCharacters');
//var passwordDisplay = document.getElementById("passwordDisplay"); 

// Function to prompt user for password options
function getPasswordOptions() {
  alert("Your password should contain between 10 and 64 characters");
  alert("Your password should contain uppercase and lowercase letters");
  alert("Your password should contain numeric and special characters");
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr);
}
console.log(getRandom(10));

  //let x = Math.random() * 10;
  //document.getElementById("password").innerHTML = x;
  

// Function to generate password with user input
function generatePassword() {
  var passwordLength = +window.prompt("Choose a password length between 10 and 64 characters");
  if (passwordLength < 10 || passwordLength > 64) {
    window.alert("You did not enter a valid number, please try again");
    return "";
  }
  var characterLowecase = window.confirm("Would you like your password to have lowercase characters?");
  var characterUppercase = window.confirm("Would you like your password to have uppercase characters?");
  var characterSpecial = window.confirm("Would you like your password to have special characters?");
  var characterNumbers = window.confirm("Would you like your password to have numeric characters?");

  let charCodes = [];
  if (characterLowecase) {
    charCodes = charCodes.concat(LOWERCASE_CODES);
  }
  if (characterUppercase) {
    charCodes = charCodes.concat(UPPERCASE_CODES);
  }
  if (characterSpecial) {
    charCodes = charCodes.concat(SYMBOLS_CODES);
  }
  if (characterNumbers) {
    charCodes = charCodes.concat(NUMBER_CODES);
  }
  if (charCodes.length === 0) {
    alert("Please choose at least one set of characters");
    return ""
  }
  var passwordCharacters = Array.from({length: passwordLength}, () => {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    return String.fromCharCode(characterCode);
  })
  return passwordCharacters.join('');
}

//const randomPassword =
//"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!%^&*()_+=-";

  //let password = "";
  //for (let i = 0; i <length; ++i) {
  //let at = Math.floor(Math.random() * (randomPassword.length + 1));
    //password += randomPassword.charAt(at); 
  //}

// alert 
//return random password

//}

/// do not change any of the below ??? 

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  document.getElementById("password").value = password;
  //var passwordText = document.querySelector('#password');

  //passwordText.value = password;
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);