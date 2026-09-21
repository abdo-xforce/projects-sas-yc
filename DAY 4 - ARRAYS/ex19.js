let arr = [2, 9, 1, 5];
let min = arr[0];
let max = arr[0];
let range;
for(let i = 0; i < arr.length; i++)
{
	if(arr[i] > max)
	{
		max = arr[i];
	}
	else if(arr[i] < min)
	{
		min = arr[i];
	}
}
range = max - min;
console.log(range);
