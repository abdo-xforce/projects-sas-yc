let arr = [1, 2, 4, 5]

let result = [];

for(let i = 0; i < arr.length; i++)
{0
	if(i === 2)
	{
		result.push(3);
	}
	result.push(arr[i]);
}
console.log(result);

