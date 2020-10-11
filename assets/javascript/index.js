
function generatePassword() {
        //accepts user input for length
    var lengthPrompt = function() {
        var length = prompt("How many characters do you want? You can choose any number between 8 & 128");
            // if nothing is typed, try again
        if (length === "" || length === null || length <= 7 || length >= 129) {
            alert("Invalid answer. Try Again")
            return lengthPrompt();
        } else {
            // return user number input
            console.log(length);
            return length;
        }
    }

        // global variable for functions
    var length = lengthPrompt();

        // UpperCase Function
    var upperCaseF = function() {
        var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var retValUp = "";

        var upCase = window.prompt("Would You like uppercase letters? Yes or No");

            // if yes, return randomized string
        if (upCase === "YES" || upCase === "yes" || upCase === "Yes") {
            for (var i = 0, n = charSetUpper.length; i < length; ++i) {
                retValUp += charSetUpper.charAt(Math.floor(Math.random() * n))
            }
            return retValUp;
                // if no, Return nothing
        } else if (upCase === "NO" || upCase === "no" || upCase === "No" ){
            retValUp === null;
            return retValUp;
        }  
    };

        // LowerCase Function
    var lowerCaseF = function() {
        var charSetLower = "abcdefghijklmnopqrstuvwxyw";
        var retVal = "";

        var lowCase = window.prompt("Would you like lowercase letters? Yes or No?");
        
            // if yes, return randomized string
        if (lowCase === "YES" || lowCase === "yes" || lowCase === "Yes") {
            for (var i = 0, n = charSetLower.length; i < length; ++i) {
                retVal += charSetLower.charAt(Math.floor(Math.random() * n));
            }
        return retVal;
            // if no, Return nothing
        } else if (lowCase === "NO" || lowCase === "no" || lowCase === "No") {
            retVal === null;
            return retVal;
        }
    };

        // Numbers Function
    var numbersF = function() {
        var numberSet = "123456789";
        var retNum = null;
        
        var numPrompt = window.prompt("Would you like numbers? Yes or No?");
        
        // if yes, return randomized string
        if (numPrompt === "YES" || numPrompt === "yes" || numPrompt === "yes") {
            for (var i = 0, n = numberSet.length; i < length; ++i) {
                retNum += numberSet.charAt(Math.floor(Math.random() * n));
            }
            return retNum;
                // if no, Return nothing
        } else if (numPrompt === "NO" || numPrompt === "no" || numPrompt === "No") {
            retNum === null;
            return retNum;
        }
    };

        // Special Characters Funcion
    var specialChar = function () {
        var specialSet = "!#$%&'()*+,-./:;/<=>?@[]^_`{|}~";
        var retSpecial = "";

        var specialPrompt = window.prompt("Would you like special characters? Yes or No?");
        
        // if yes, return randomized string
        if (specialPrompt === "YES" || specialPrompt === "yes" || specialPrompt === "Yes") {
            for (var i = 0, n = specialSet.length; i < length; ++i) {
                retSpecial += specialSet.charAt(Math.floor(Math.random() * n));
            }
            return retSpecial;
                // if no, Return nothing
        } else if (specialPrompt === "NO" || specialPrompt === "no" || specialPrompt === "No") {
            retSpecial === null;
            return retSpecial;
        }
    };


    var retValCom = "";
        // combines all functions
    var alphabet = lowerCaseF() + upperCaseF() + numbersF() + specialChar();    
        // randomly mixes alphabet
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
