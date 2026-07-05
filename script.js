function stringChop(str, size) {
  // your code herefunction stringChop(str, size) {
    if (str == null){
		
	return [];
	}
    let result = [];

    for (let i = 0; i < str.length; i += Number(size)) {
        result.push(str.slice(i, i + Number(size)));
    }

    return result;
}
	
}
chunkString("Hello, world!",5)
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
