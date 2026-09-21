// 7. const array mutation — Medium
const number = [1, 2];
number.push(3);
console.log(number)


// its because arr still refers to the same array  We're simply changing its contents 
// but with arr = [4, 5] we are assigning a new value to a const so it won't work