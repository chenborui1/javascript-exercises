const reverseString = function(string) {
    if (string == '') {
        return ''
    }

    answer = ''
    for (let i = string.length - 1; i >= 0; i--) {
        answer += string.charAt(i);
    }
    return answer
};

// Do not edit below this line
module.exports = reverseString;
