// 9. Swap two items — Hard

let number = [1, 2, 3, 4]

let temp = number[0]

number[0]= number[number.length - 1]

number[number.length - 1]= temp

console.log(number);