function findFirstNonRepeatedChar(string) {
    var charCounts = {};


    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }


    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (charCounts[char] === 1) {
            return char;
        }
    }


    return null;
}
console.log(findFirstNonRepeatedChar('nurlan'));