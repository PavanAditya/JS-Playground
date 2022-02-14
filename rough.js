minAdditionsToMakepalindrome = function(A) {
    if (A === A.split('').reverse().join('')) {
        return 0;
    }
    let count = 1;
    while (count < A.length) {
        let splitStrArr = A.split('');
        if ([...splitStrArr, ...splitStrArr.slice(0, count).reverse()].join('') === [...splitStrArr, ...splitStrArr.slice(0, count).reverse()].reverse().join('')) {
            break;
        }
        count++;
    }
    return count;
}

console.log(minAdditionsToMakepalindrome('njqeeosasrtcawhspirwsbgg'));

// ? #########################################################################