// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var passLength = prompt("How long would you like your passwod? Must be between 8 and 128 characters.");
    while (passLength > 128 || passLength < 8 || isNaN(passLength)) {
        var passLength = prompt("How long would you like your passwod? Must be between 8 and 128 characters.");
    }


    if (confirm("Would you like a lowercase letter?")) {
        lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    } else {
        lowerCase = ""
    }

    if (confirm("Would you like an uppercase letter?")) {
        upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
        upperCase = ""
    }

    if (confirm("Would you like a number included?")) {
        numChoice = "0123456789";
    } else {
        numChoice = ""
    }

    if (confirm("Would you like a special character included? ex. !, $, * ,etc...")) {
        specChar = "!@#$%^&*()_+/?~";
    } else {
        specChar = ""
    }
    var charset = lowerCase + upperCase + numChoice + specChar;
    newPassword = "";
    for (var i = 0, n = charset.length; i < passLength; ++i) {
        newPassword += charset.charAt(Math.floor(Math.random() * n));
    }

    return newPassword;

}