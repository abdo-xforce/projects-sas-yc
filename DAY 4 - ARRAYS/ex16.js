let arr = [3, 9, 1, 7];

let akbarnum = arr[0]
for(i = 0; i < arr.length; i++)
{
	if(arr[i] > akbarnum)
	{
		akbarnum = arr[i];
	}
}
console.log(akbarnum);
