
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
    numberSet = 123456789,
    retVal = "",
    retValUp = "",
    retValCom = "";

        // UpperCase Function
    var upperCaseF = function() {
            // let's us have a password entirly uppercase
        var upCase = window.prompt("Would You like uppercase letters? Yes or No");
        if (upCase === "YES" || upCase === "yes" || upCase === "Yes") {
            for (var i = 0, n = charSetUpper.length; i < length; ++i) {
                retValUp += charSetUpper.charAt(Math.floor(Math.random() * n))
            }
            return retValUp;
        } else if (upCase === "NO" || upCase === "no" || upCase === "No" ){
            retValUp === null;
            return retValUp;
        }  
    };

        // LowerCase Function
    var lowerCaseF = function() {
        // loop for lower case letters
        var lowCase = window.prompt("Would you like lowercase letter? Yes or No?");
        if (lowCase === "YES" || lowCase === "yes" || lowCase === "Yes") {
            for (var i = 0, n = charSetLower.length; i < length; ++i) {
                retVal += charSetLower.charAt(Math.floor(Math.random() * n));
            }
        return retVal;
        } else if (lowCase === "NO" || lowCase === "no" || lowCase === "No") {
            retVal === null;
            return retVal;
        }
    };
        // combines lower and upper case
    var alphabet = lowerCaseF() + upperCaseF();    
        // randomly mixes lower and upper case
    for (var i = 0, n = alphabet.length; i < length; ++i) {
        retValCom += alphabet.charAt(Math.floor(Math.random() * n))
    }
        // returns mixed string
    return retValCom;
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

    /* 
    if (retValUp === "A" || retValUp === "B" || retValUp === "C" || retValUp === "D" || retValUp === "E" || retValUp === "F" || retValUp === "G" || retValUp === "H" || retValUp === "I" || retValUp === "J" || retValUp === "K" 
    || retValUp === "L" || retValUp === "M" || retValUp === "N" || retValUp === "O" || retValUp === "P" || retValUp === "Q" || retValUp === "R" || retValUp === "S" || retValUp === "T" || retValUp === "U" || retValUp === "V" || 
    retValUp === "W" || retValUp === "X" || retValUp === "Y" || retValUp === "Z")
    */


    /*  
        var combinedAlphabet = function() {
        var alphabet = lowerCaseF() + upperCaseF();
        if (upperCaseF() === "" && lowerCaseF() === "") {
            for (var i = 0, n = alphabet.length; i < length; ++i) {
                retValCom += alphabet.charAt(Math.floor(Math.random() * n))
            }

        return retValCom;
        }
    };
    */
