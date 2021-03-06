function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function quickSort(arr) {
    if (arr[0]) {
        let pivot = arr.length - 1;
        let p1 = -1;
        let p2 = 0;
        while (p2 < arr.length) {
            if (arr[p2] < arr[pivot]) {
                arr = swap(arr, ++p1, p2);
            }
            p2++;
        }
        arr = swap(arr, ++p1, pivot);
        arr = [
            ...quickSort(arr.slice(0, p1)),
            arr[p1],
            ...quickSort(arr.slice(p1 + 1, arr.length))
        ];
    }
    return arr;
}

console.log(quickSort([3, 5, 7, 8, 6, 1]));
// console.log(quickSort([20, 50, 70, 90, 10, 40]));
// console.log(quickSort([10, 10, 10, 90, 10, 10]));
