let arr = [1, 2, 3, 4, 5];

let temp;

temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
arr[1] = arr[2];
arr[2] = temp;
temp = arr[3];
arr[3] = arr[2];
arr[2] = temp; 
temp = arr[4];
arr[4] = arr[3];
arr[3] = temp;
console.log(arr);

