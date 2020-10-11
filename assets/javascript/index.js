
function generatePassword() {
        //accepts user input for length
    var lengthPrompt = function() {
        var length = prompt("How many characters do you want? You can choose any number between 8 & 128");
            // chooses what to pass and accept
        if (length === "" || length === null || length <= 7 || length >= 129) {
            alert("Invalid answer. Try Again")
            return lengthPrompt();
        } else {
            return length;
        }
    }

    
    if (generateBtn === "" ||  generateBtn === null || generateBtn <= 7 || generateBtn >= 129) {
        window.alert("Invalid answer");
        return generatePassword;
    }
    var length = lengthPrompt(),
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// window.prompt("How many characters do you want? You can choose any number between 8 & 128");