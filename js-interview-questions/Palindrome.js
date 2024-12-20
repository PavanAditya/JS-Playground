function generatePalindrome(num) {
    let reverseNum = reverseNumber(num);
    return reverseNum + num;
}

function isPalindrome(num) {
    return (num == reverseNumber(num));
}


function reverseNumber(s) {
    s = s.toString();
    const val = s.split("").reverse().join("");
    // return parseInt(val) // ? Send as int for getting the lowest palindrome number for the given input
    return val // ? Send as string for getting the direct palindrome number for the given input (same num appended at the end)
}

function checkAndGeneratePalindrome(num) {
    if (isPalindrome(num)) {
        return num;
    }
    while (!isPalindrome(num)) {
        num = generatePalindrome(num);
    }
    return num
}


console.log(checkAndGeneratePalindrome(49))
// console.log(checkAndGeneratePalindrome(55))
// console.log(checkAndGeneratePalindrome(525))
console.log(checkAndGeneratePalindrome(52))

