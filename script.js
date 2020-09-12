// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

document.getElementById("password").innerHTML = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upper= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var numbers = ["0","1","2","3","4","5","6","7","8","9",];

var symbols = ["!","@","#","$","%","^","&","*","()",];
var criteria = [];
var length;
var useUpper;
var useLower;
var useNumbers;
var useSymbols;



function generatePassword() {
  var finalPassword = ""
  criteria = []
  length = prompt(
    "Password length should be at least 8 characters long, but not more than 128 characters long, please!"
  );
  while (length < 8 || length > 128) {
    alert("Password length does not meet requirements!")
    length = prompt(
      "Select any number of characters between 8 and 128"
    );

    
  }
  alert(
    "Thank you! Select character type"
  );
   
  useUpper = confirm("Uppercase letters?");
  if (useUpper) {
    criteria = criteria.concat(upper)
  };
  useLower = confirm("Lowercase letters?");
  if (useLower) {
    criteria = criteria.concat(lower)
  };
  useNumbers = confirm("Number characters?");
  if (useNumbers) {
    criteria = criteria.concat(numbers)
  };
  useSymbols = confirm("Symbol characters?");
  if (symbols) {
    criteria = criteria.concat(symbols)
  };


  for (var i = 0; i < length; i++) {
    var randomNumberGen = Math.floor(Math.random() * criteria.length);

    finalPassword = (finalPassword + criteria[randomNumberGen]);

    password = finalPassword;

  }
  return password;

  






  
  




}








