/*
 * ****** Level Order Traversals of Binary Tree ****** *
*/

let arrNormalLOT = [];
let arrSpiralLOT = [];

/*
    * Operates on the node and calls itself recursivelly for traversing to the child branches.
    * Termination Condition => input param "node" should be null value. 
    * Params => node: <Node>{value: string, left: <Node>, right: <Node>}, level: number
    * Return Type => void
*/
const levelOrderTraversal = (node, level) => {
    if (!node) {
        return;
    }
    if (!arrNormalLOT[level]) {
        arrNormalLOT[level] = [];
    }
    arrNormalLOT[level].push(node.value);
    levelOrderTraversal(node.left, level+1);
    levelOrderTraversal(node.right, level+1);
}

/*
    * Operates on the node and calls itself recursivelly for traversing to the child branches.
    * Termination Condition => input param "node" should be null value. 
    * Params => node: <Node>{value: string, left: <Node>, right: <Node>}, level: number
    * Return Type => void
*/
const spiralLevelOrderTraversal = (node, level) => {
    if (!node) {
        return;
    }
    if (!arrSpiralLOT[level]) {
        arrSpiralLOT[level] = [];
    }
    arrSpiralLOT[level].push(node.value);
    spiralLevelOrderTraversal(node.left, level+1);
    spiralLevelOrderTraversal(node.right, level+1);
}

/*
    * Operates on the node and calls a function named levelOrderTraversal for generating the array for a normal level order traversal.
    * Maps over the formed array and form the Normal Level Order Traversal elements order in a string. 
    * Params => node: <Node>{value: string, left: <Node>, right: <Node>}
    * Return Type => void
*/
const printNormalLOT = (node) => {
    levelOrderTraversal(node, 0);
    let normalLOT = '';
    arrNormalLOT.map((key, index) => {
        normalLOT = normalLOT + key.join(',');
        normalLOT = normalLOT + (index === (arrNormalLOT.length - 1) ? '' : ',');
    });
    console.log('Normal Level Order Traversal =>', normalLOT);
}

/*
    * Operates on the node and calls a function named spiralLevelOrderTraversal for generating the array for a spiral level order traversal.
    * Maps over the formed array, applies logic for finding the spiral level elements and forms the Spiral Level Order Traversal elements order in a string. 
    * Params => node: <Node>{value: string, left: <Node>, right: <Node>}
    * Return Type => void
*/
const printSpiralLOT = (node) => {
    spiralLevelOrderTraversal(node, 0);
    let spiralLOT = '';
    arrSpiralLOT.map((key, index) => {
        if (index % 2 === 0)
        spiralLOT = spiralLOT + key.join(',');
        else
        spiralLOT = spiralLOT + key.reverse().join(',');
        spiralLOT = spiralLOT + (index === (arrSpiralLOT.length - 1) ? '' : ',');
    });
    console.log('Spiral Level Order Traversal =>', spiralLOT);
}

const mainFunctionForLOT = () => {
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
    printNormalLOT(node);
    printSpiralLOT(node);
};

mainFunctionForLOT();