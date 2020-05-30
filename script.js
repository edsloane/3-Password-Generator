// Assignment Code
var generateBtn = document.querySelector("#generate");

// Welcome Alert//
var hello = alert("Welcome to the password generator, please select from the criteria and choose a password length on the slider");

// Write password to the #password input
function writePassword() {

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var symbols = "(!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var numbers = "0123456789"

  var sliderlength = document.getElementById("slider").value;

  var passwordDesign = "";

  if (document.getElementById("inputlowercase").checked) {
      passwordDesign += lowerCase;
  }
  if (document.getElementById("inputuppercase").checked) {
      passwordDesign += upperCase;
  }
  if (document.getElementById("inputspecialchar").checked) {
    passwordDesign += symbols;
  }
  if (document.getElementById("inputnumeric").checked) {
    passwordDesign += numbers;
  }
   
  var password = "";

  for (var i = 0; i <= sliderlength; i++) {
      var prepass = Math.floor(Math.random() * passwordDesign.length)
    password += passwordDesign.charAt(prepass);
  }

  if (document.getElementById("inputspecialchar").checked === false && document.getElementById("inputlowercase").checked === false && document.getElementById("inputnumeric").checked === false && document.getElementById("inputuppercase").checked === false) {
    alert("Please select at least one criteria")
   }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Slider Length Default Value //
document.getElementById("length").innerHTML = "Length: 68";

// Slider Length Input Value //
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);