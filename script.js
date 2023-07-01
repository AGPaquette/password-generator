// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Generates a password for the user and then returns the password that was created
function generatePassword() {
  var num = userInput()
  // Empty string to then append the random values selected.
  var password = ''
  // Arrays created to hold the characters that will be chosen for the random password.
  var upperList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
  var lowerlist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var numList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  var symbolList = ['!', '@', '#', '$', "?", "&"]
  // Arrays combined together to randomly select a random array to pick a random character
  var combinedList = [upperList, lowerlist, numList, symbolList]
  // Takes the user input then selects random characters from one of the four list given to for however long the user wanted the password to be 
  for(let i = 0; i < num; i++) {
    var randomListLocation = Math.floor(Math.random() * combinedList.length)
    var finalList = combinedList[randomListLocation]
    var randomCharacter = finalList[Math.floor(Math.random() * finalList.length)]
    password = password.concat(randomCharacter)
  }
  return password
  
}

// ask for user input for password length 
function userInput() {
  var passLength = prompt("Enter a number between 8 and 128 for password length.")
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Invalid number please select a number from 8 to 128.")
  }
  return passLength
}
