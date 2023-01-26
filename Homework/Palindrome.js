let word = "john";
let reverse = word.split("").reverse().join("");
if (reverse == word) {
  console.log("Palidrome");
} else {
  console.log("Not a Palidrome");
}
