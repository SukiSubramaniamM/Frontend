function getEvenNumbers(numbers) {
    var evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0;
    });
    return evenNumbers;
}
var numbers = [1, 2, 3, 4];
var evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); 

