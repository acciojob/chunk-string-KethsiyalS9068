
chunkString("Hello, world!", 5) // ["Hello", ", wor", "ld!"]
chunkString("12345", 2) // ["12", "34", "5"]
chunkString("abc", 5) // ["abc"]
function stringChop(str, size) {
  // your code herefunction stringChop(str, size) {
    if (str == null) return [];

    let result = [];

    for (let i = 0; i < str.length; i += Number(size)) {
        result.push(str.slice(i, i + Number(size)));
    }

    return result;
}
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
