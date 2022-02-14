/*
 * ****** All Views of a Binary Tree ****** *
*/

let topWidthBasedMap = [];
let bottomWidthBasedMap = [];
let leftHeightBasedMap = [];
let rightHeightBasedMap = [];

const formTopWidthBasedMap = (node, height, width) => {
    if (!node) {
        return;
    }
    let flag = false;
    let matchedIndex = -1;
    topWidthBasedMap.map((key, index) => {
        if (key.width === width) {
            flag = true;
            matchedIndex = index;
        }
    });
    if (flag) {
        if (topWidthBasedMap[matchedIndex].width === width && topWidthBasedMap[matchedIndex].height > height) {
            topWidthBasedMap[matchedIndex].width = width;
            topWidthBasedMap[matchedIndex].value = node.value;
        } else if (topWidthBasedMap[matchedIndex].width === width && topWidthBasedMap[matchedIndex].height === height) {
            topWidthBasedMap.push({height, width, value: node.value});
        }
    } else {
        topWidthBasedMap.push({height, width, value: node.value});
    }
    formTopWidthBasedMap(node.left, height + 1, width - 1);
    formTopWidthBasedMap(node.right, height + 1, width + 1);
};

const formBottomWidthBasedMap = (node, height, width) => {
    if (!node) {
        return;
    }
    let flag = false;
    let matchedIndex = -1;
    bottomWidthBasedMap.map((key, index) => {
        if (key.width === width) {
            flag = true;
            matchedIndex = index;
        }
    });
    if (flag) {
        if (bottomWidthBasedMap[matchedIndex].width === width && bottomWidthBasedMap[matchedIndex].height < height) {
            bottomWidthBasedMap[matchedIndex].width = width;
            bottomWidthBasedMap[matchedIndex].value = node.value;
            console.log(node, height, width, bottomWidthBasedMap[matchedIndex]) // ! Need an exact check
        } else if (bottomWidthBasedMap[matchedIndex].width === width && bottomWidthBasedMap[matchedIndex].height === height) {
            console.log(node)
            bottomWidthBasedMap.push({height, width, value: node.value});
        }
    } else {
        bottomWidthBasedMap.push({height, width, value: node.value});
    }
    formBottomWidthBasedMap(node.left, height + 1, width - 1);
    formBottomWidthBasedMap(node.right, height + 1, width + 1);
};

const formLeftHeightBasedMap = (node, height, width) => {
    if (!node) {
        return;
    }
    let flag = false;
    let matchedIndex = -1;
    leftHeightBasedMap.map((key, index) => {
        if (key.height === height) {
            flag = true;
            matchedIndex = index;
        }
    });
    if (flag) {
        if (leftHeightBasedMap[matchedIndex].height === height && leftHeightBasedMap[matchedIndex].width > width) {
            leftHeightBasedMap[matchedIndex].width = width;
            leftHeightBasedMap[matchedIndex].value = node.value;
        }
    } else {
        leftHeightBasedMap.push({height, width, value: node.value});
    }
    formLeftHeightBasedMap(node.left, height + 1, width - 1);
    formLeftHeightBasedMap(node.right, height + 1, width + 1);
};

const formRightHeightBasedMap = (node, height, width) => {
    if (!node) {
        return;
    }
    let flag = false;
    let matchedIndex = -1;
    rightHeightBasedMap.map((key, index) => {
        if (key.height === height) {
            flag = true;
            matchedIndex = index;
        }
    });
    if (flag) {
        if (rightHeightBasedMap[matchedIndex].height === height && rightHeightBasedMap[matchedIndex].width < width) {
            rightHeightBasedMap[matchedIndex].width = width;
            rightHeightBasedMap[matchedIndex].value = node.value;
        }
    } else {
        rightHeightBasedMap.push({height, width, value: node.value});
    }
    formRightHeightBasedMap(node.left, height + 1, width - 1);
    formRightHeightBasedMap(node.right, height + 1, width + 1);
};

const printTopView = (node) => {
    formTopWidthBasedMap(node, 0, 0);
    topWidthBasedMap.sort((a,b) => (a.width - b.width));
    let printViewString = '';
    topWidthBasedMap.map((key, index) => {
        printViewString = printViewString + (key.value + ((index === topWidthBasedMap.length - 1) ? '' : ', '));
    });
    console.log(topWidthBasedMap);
    console.log('Top View of the given Binary Tree ->', printViewString);
};

const printBottomView = (node) => {
    formBottomWidthBasedMap(node, 0, 0);
    bottomWidthBasedMap.sort((a,b) => (a.width - b.width));
    let printViewString = '';
    bottomWidthBasedMap.map((key, index) => {
        printViewString = printViewString + (key.value + ((index === bottomWidthBasedMap.length - 1) ? '' : ', '));
    });
    console.log('Bottom View of the given Binary Tree ->', printViewString);
};

const printLeftView = (node) => {
    formLeftHeightBasedMap(node, 0, 0);
    leftHeightBasedMap.sort((a,b) => (a.height - b.height));
    let printViewString = '';
    leftHeightBasedMap.map((key, index) => {
        printViewString = printViewString + (key.value + ((index === leftHeightBasedMap.length - 1) ? '' : ', '));
    });
    console.log('Left View of the given Binary Tree ->', printViewString);
};

const printRightView = (node) => {
    formRightHeightBasedMap(node, 0, 0);
    rightHeightBasedMap.sort((a,b) => (a.height - b.height));
    let printViewString = '';
    rightHeightBasedMap.map((key, index) => {
        printViewString = printViewString + (key.value + ((index === rightHeightBasedMap.length - 1) ? '' : ', '));
    });
    console.log('Right View of the given Binary Tree ->', printViewString);
};

const mainFunctionForAllViews = () => {
    const node = {
        value: 1,
        left: {
            value: 2,
            left: { value: 4, left: { value: 8, left: null, right: null }, right: null },
            right: { value: 5, left: { value: 9, left: null, right: null }, right: null }
        },
        right: {
            value: 3,
            left: { value: 6, left: null, right: { value: 10, left: null, right: null }},
            right: { value: 7, left: null, right: { value: 11, left: null, right: null }}
        }
    };
    printTopView(node);
    // printBottomView(node);
    // printLeftView(node);
    // printRightView(node);
};

mainFunctionForAllViews();