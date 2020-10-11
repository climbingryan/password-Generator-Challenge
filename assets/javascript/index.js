
function generatePassword() {

   
        //accepts user input for length
    var lengthPrompt = function() {
        var length = prompt("How many characters do you want? You can choose any number between 8 & 128");
            // chooses what to pass and accept
        if (length === "" || length === null || length <= 7 || length >= 129) {
            alert("Invalid answer. Try Again")
            return lengthPrompt();
        } else {
            console.log(length);
            return length;
        }
    }

    var length = lengthPrompt(),
    charSetLower = "abcdefghijklmnopqrstuvwxyw",
    charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    retVal = "";
    retValUp = "";


    var upCase = window.prompt("Would You like uppercase letters? Yes or No");
    if (upCase === "YES" || upCase === "yes" || upCase === "Yes") {
        for (var i = 0, n = charSetUpper.length; i < length; ++i) {
            retValUp += charSetUpper.charAt(Math.floor(Math.random() * n))
        }
        console.log(retValUp);
        return retValUp;
    }
    

    for (var i = 0, n = charSetLower.length; i < length; ++i) {
        retVal += charSetLower.charAt(Math.floor(Math.random() * n));
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

/*     var specCharPrompt = function() {
        var charPrompt = prompt("Do you want Uppercase, Lowercase, Numbers, and/or special characters");
            // if empty ask again
        if (charPrompt === "" || charPrompt === null) {
            alert("Invalid answer. Try Again")
            return specCharPrompt();
        }
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (charPrompt === "uppercase" || charPrompt === "UPPERCASE" || charPrompt === "UpperCase") {
            while (charPrompt) {
                charPrompt += charSet[Math.floor(Math.random() * charSet)];
            }
            return charPrompt;
        }
        console.log(charPrompt());
    } */