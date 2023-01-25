let word = 'anna'
let backwards = word.split("").reverse().join("");
if (backwards==word) {
    console.log('This word is a Palidrome')
    }
else {
    console.log('This word is not a Palidrome')
}