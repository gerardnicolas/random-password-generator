const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let randPassOne = document.getElementById("randompassone-el")
let randPassTwo = document.getElementById("randompasstwo-el")
let inputEl = document.getElementById("inputlength-el")
let msgEl = document.getElementById("p-desc")

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPasswordOne() {
    let randomPassword = ""
    for (let i = 0; i < inputEl.value; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function generateRandomPasswordTwo() {
    let randomPassword = ""
    for (let i = 0; i < inputEl.value; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function validateInput() {
    if (document.getElementById("inputlength-el").value.trim() == 0){
        alert("Allowed inputs are only from ranges 1-18, try entering a valid number.");
    } else if (document.getElementById("inputlength-el").value.trim() == "") {
        alert("Please enter a number.");
        return false;
    }
}

function generateRandomPasswords() {
    validateInput()
    if (document.getElementById("inputlength-el").value.trim() > 18) {
        alert("Allowed inputs are only from ranges 1-18, try entering a valid number.")
    } else {
        let generatedPasswordOne = generateRandomPasswordOne()
        let generatedPasswordTwo = generateRandomPasswordTwo()
        randPassOne.textContent = generatedPasswordOne
        randPassTwo.textContent = generatedPasswordTwo
    }
}

function copyRandPassOne() {
    var copyText = document.getElementById("randompassone-el").innerHTML;

    if (copyText == "") {
        alert("Please generate a password.")
    } else {
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', copyText);
            e.preventDefault();
        }, true);

        document.execCommand('copy');
        console.log('Copied text: ' + copyText);
        alert('Copied to clipboard: ' + copyText);
    }
}

function copyRandPassTwo() {
    var copyText = document.getElementById("randompasstwo-el").innerHTML;

    if (copyText == "") {
        alert("Please generate a password.")
    } else {
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', copyText);
            e.preventDefault();
        }, true);

        document.execCommand('copy');
        console.log('Copied text: ' + copyText);
        alert('Copied to clipboard! + "(" + copyText + ")";
    }
}
