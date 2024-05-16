const removeFromArray = function(array, ...moreArgs) {
    answer = [];
    for (let i = 0; i < array.length; i++) {
        if (!(moreArgs.includes(array[i]))) {
            answer.push(array[i]);
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
