function add7 (number) {
    return number + 7
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

function capitalize (inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
}

function lastLetter (inputString) {
    return inputString.slice(-1)
}


console.log(add7(7))
console.log(multiply(3, 100))
console.log(capitalize("lowercase"))
console.log(capitalize("UPPERCASE"))
console.log(capitalize("BoTh"))
console.log(lastLetter("abcd"))