// palindrome

function palindrome(soz) {

    for (var i = 0; i <= soz.length - 1; i++) {
        if (soz[i] !== soz[soz.length - i - 1]) {
            return false
        } else {
            return true
        }

    }

}

console.log(palindrome('lol'));