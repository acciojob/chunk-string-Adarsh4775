function stringChop(str, size) { 
  // your code here
	 let ans = [];
	for(i=0; i<=str.length-1; i++)
		{
			ans.push(str.slice(i, i+size));
			i = i+size;
		}
	return ans; 
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
