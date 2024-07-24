const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/ /g,'');
    string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  

    let middle = (string.length / 2)
    let l = -1;
    let r = -1;

    if (string.length % 2 != 0) {
        l = middle;
        r = middle;
    }
    else {
        l = middle - 1;
        r = middle;
    }
    l = Math.floor(l)
    r = Math.floor(r)
    console.log(l)
    console.log(r)
    while (l >= 0 && r < string.length) {
        if (string[l] != string[r]) {
            return false;
        }
        l -= 1
        r += 1
    }

    return true

};

// Do not edit below this line
module.exports = palindromes;
