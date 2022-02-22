function merge(arr1, arr2) {
    let arrP1 = 0;
    let arrP2 = 0;
    let arrRes = [];
    if (!arr1[0])
        return arrRes = [...arr2];
    if (!arr2[0])
        return arrRes = [...arr1];
    while ((arrP1 < arr1.length && arrP2 < arr2.length)) {
        arrRes.push(arr1[arrP1] < arr2[arrP2] ? arr1[arrP1++] : arr2[arrP2++]);
    }
    if (arrP1 < arr1.length)
        arrRes.push(...arr1.slice(arrP1, arr1.length))
    if (arrP2 < arr2.length)
        arrRes.push(...arr2.slice(arrP2, arr2.length));
    return arrRes;
}

function mergeSort(arr) {
    let l = 0;
    let r = arr.length - 1;
    if (arr[0] && l < r) {
        let mid = Math.floor(l + (r - 1) / 2);
        return merge(mergeSort(arr.slice(l, mid + 1)), mergeSort(arr.slice(mid + 1, r + 1)))
    }
    return arr;
}

console.log(mergeSort([20, 50, 70, 90, 10, 40]));
// console.log(mergeSort([10, 10, 10, 90, 10, 10]));

// ? Logic:
/*
* 1. Recursively divide the array until least possible size i.e. 1
* 2. With the least possible size, merge the two subarrays in ASO
* 3. Return the merged array nested to the parent recursive call.
* 4. Repeat the same process until the recursion ends.
* 5. Return the final merged array.
*/