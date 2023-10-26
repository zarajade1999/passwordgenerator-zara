var generateBtn = document.querySelector("#generate");
var uppercaseABC = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";   
var numb123 ="1234567890";
var symbol ="!@#$%^&*";

function passwordChoice() {
var randomKey ="";
var multiSelect = "";
var length = prompt("The password must be between 8 - 128 characters");
if (length < 8 || length > 128 || isNaN(length)) {
  alert("Please put a password between 8 - 128 characters");
  return;

 } else {
  
var uppercase = confirm("The password will contain uppercase letters.");
if (uppercase) { multiSelect += uppercaseABC;}
var lowercase = confirm("The password will contain lowercase letters.");
if (lowercase) { multiSelect += lowercaseABC;}
var numb = confirm("The password will contain numbers");
if (numb) { multiSelect += numb123;}
var symb = confirm("The password will contain symbols");
if (symb) {multiSelect += symbol;}

}
for (i = 0; i < length; i++) {

    randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
  }
  return(randomKey);
}
var writtenPassword = document.querySelector("#password");
function writePassword(randomKey) {
   if (password.length === 0) {
    return;
   }
   writtenPassword.value = randomKey;
}

generateBtn.addEventListener("click", function() { writePassword (passwordChoice())} );