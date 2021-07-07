const findMedian = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let m1 = -1;
    let m2 = -1;

    if (arr1[arr1.length - 1] <= arr2[0]) {
        m1 = arr1[arr1.length - 1];
        m2 = arr2[0];
        return (m1 + m2) / 2;
    }

    if (arr2[arr2.length - 1] <= arr1[0]) {
        m1 = arr2[arr2.length - 1];
        m2 = arr1[0];
        return (m1 + m2) / 2;
    }

    for (let count = 0; count <= arr1.length; count++) {
        if (arr1[i] <= arr2[j]) {
            m1 = m2;
            m2 = arr1[i];
            i++;
        } else {
            m1 = m2;
            m2 = arr2[j];
            j++;
        }
    }
    return (m1 + m2) / 2;
}

const mainFuncToFindMedian = () => {
    const arr1 = [1, 2, 5, 6, 8, 9];
    const arr2 = [3, 5, 7, 8, 11, 13];
    console.log('Median of two arrays is:', Math.floor(findMedian(arr1, arr2)));
}

mainFuncToFindMedian();