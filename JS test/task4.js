function toTitleCase(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
var inputString = "bala";
console.log("my name is: " + toTitleCase(inputString)); 
