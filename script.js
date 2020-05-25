// Assignment Code
var generateBtn = document.querySelector("#generate");

// Welcome Alert//
var hello = alert("Welcome to the password generator, please select from the criteria and choose a password length on the slider");

// Write password to the #password input
function writePassword() {

  var password = "";

  var sliderlength = document.getElementById("slider").value;
  for (var i = 0; i < sliderlength; i++) {

    // Generate Lowercase Only
    if (document.getElementById("inputlowercase").checked === true && document.getElementById("inputuppercase").checked === false && document.getElementById("inputnumeric").checked === false && document.getElementById("inputspecialchar").checked === false) {
      var lowercase = "abcdefghijklmnopqrstuvwxyz";
      password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    }
    // Generate Lower & Upper Case
    else if (document.getElementById("inputlowercase").checked === true && document.getElementById("inputuppercase").checked === true && document.getElementById("inputnumeric").checked === false && document.getElementById("inputspecialchar").checked === false) {
      var loweruppercase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      password += loweruppercase.charAt(Math.floor(Math.random() * loweruppercase.length));
    }
    // Generate Lower & Numbers
    else if (document.getElementById("inputlowercase").checked === true && document.getElementById("inputuppercase").checked === false && document.getElementById("inputnumeric").checked === true && document.getElementById("inputspecialchar").checked === false) {
      var lowecasenum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      password += lowecasenum.charAt(Math.floor(Math.random() * lowecasenum.length));
    }
    // Generate Lower & Upper Cases & Numbers
    else if (document.getElementById("inputlowercase").checked === true && document.getElementById("inputuppercase").checked === true && document.getElementById("inputnumeric").checked === true && document.getElementById("inputspecialchar").checked === false) {
      var loweruppercasenumber = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ(!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      password += loweruppercasenumber.charAt(Math.floor(Math.random() *loweruppercasenumber.length));
    }
    // Generate Lower & Upper Cases & Special Characters
    else if (document.getElementById("inputlowercase").checked === true && document.getElementById("inputuppercase").checked === true && document.getElementById("inputnumeric").checked === false && document.getElementById("inputspecialchar").checked === true) {
      var loweruppercasespecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      password += loweruppercasespecial.charAt(Math.floor(Math.random() *loweruppercasespecial.length));
    }
     // Generate Lower Cases, Numbers & Special Characters
     else if (document.getElementById("inputlowercase").checked === true && document.getElementById("inputuppercase").checked === false && document.getElementById("inputnumeric").checked === true && document.getElementById("inputspecialchar").checked === true) {
      var lowercasenumberspeical = "abcdefghijklmnopqrstuvwxyz0123456789(!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      password += lowercasenumberspeical.charAt(Math.floor(Math.random() *lowercasenumberspeical.length));
    }
    // Generate Upper Cases, Numbers & Special Characters
    else if (document.getElementById("inputlowercase").checked === false && document.getElementById("inputuppercase").checked === true && document.getElementById("inputnumeric").checked === true && document.getElementById("inputspecialchar").checked === true) {
      var uppercasenumberspeical = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      password += uppercasenumberspeical.charAt(Math.floor(Math.random() *uppercasenumberspeical.length));
    }
    // Generate Numbers & Special Characters 
    else if (document.getElementById("inputlowercase").checked === false && document.getElementById("inputuppercase").checked === false && document.getElementById("inputnumeric").checked === true && document.getElementById("inputspecialchar").checked === true) {
      var numberspecial = "0123456789(!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      password += numberspecial.charAt(Math.floor(Math.random() *numberspecial.length));
    }
    // Generate Lowercase & Special Characters 
    else if (document.getElementById("inputlowercase").checked === true && document.getElementById("inputuppercase").checked === false && document.getElementById("inputnumeric").checked === false && document.getElementById("inputspecialchar").checked === true) {
      var lowerspecial = "abcdefghijklmnopqrstuvwxyz(!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      password += lowerspecial.charAt(Math.floor(Math.random() *lowerspecial.length));
    }
    // Generate Uppercase & Special Characters 
    else if (document.getElementById("inputlowercase").checked === false && document.getElementById("inputuppercase").checked === true && document.getElementById("inputnumeric").checked === false && document.getElementById("inputspecialchar").checked === true) {
      var upperspecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ(!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      password += upperspecial.charAt(Math.floor(Math.random() *upperspecial.length));
    }
     // Generate Uppercase & Numbers 
     else if (document.getElementById("inputlowercase").checked === false && document.getElementById("inputuppercase").checked === true && document.getElementById("inputnumeric").checked === true && document.getElementById("inputspecialchar").checked === false) {
      var uppernum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      password += uppernum.charAt(Math.floor(Math.random() *uppernum.length));
    }
    // Generate All
    else if (document.getElementById("inputlowercase").checked === true && document.getElementById("inputuppercase").checked === true && document.getElementById("inputnumeric").checked === true && document.getElementById("inputspecialchar").checked === true) {
      var all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      password += all.charAt(Math.floor(Math.random() * all.length));
    }
      // Generate Uppercase Only
    else if (document.getElementById("inputuppercase").checked === true && document.getElementById("inputlowercase").checked === false && document.getElementById("inputnumeric").checked === false && document.getElementById("inputspecialchar").checked === false) {
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    }
    // Generate Numbers Only
    else if (document.getElementById("inputnumeric").checked === true && document.getElementById("inputlowercase").checked === false && document.getElementById("inputuppercase").checked === false && document.getElementById("inputspecialchar").checked === false) {
      var numbers = "0123456789";
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    // Generate Special Characters Only
    else if (document.getElementById("inputspecialchar").checked === true && document.getElementById("inputlowercase").checked === false && document.getElementById("inputnumeric").checked === false && document.getElementById("inputuppercase").checked === false) {
      var specialchar = "(!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      password += specialchar.charAt(Math.floor(Math.random() * specialchar.length));
    }
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