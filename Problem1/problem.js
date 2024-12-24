function countChars(str) {
    str = str.split(' ').join('').toUpperCase();
    let charCount = {};

    for(let i = 0; i < str.length; i++){
        let char = str[i];
        charCount[char] = (charCount[char] || 0) +1;
    }

    for(let char in charCount){
        console.log(`${char}-${charCount[char]}`);
    }
}

console.log(countChars("Amolya Sharma"));
console.log(countChars("Chinmay Kulkarni"));