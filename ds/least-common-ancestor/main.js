/*
* Pattern: Least Common Ancestor
* Function is used as the constructor for creating a node.
* @param {number/string} val - data to be stored in the node.
*/
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}


function findLca(root, nodeValue1, nodeValue2) {
    let trackToNode1 = [];
    let trackToNode2 = [];
    if (!findPath(root, nodeValue1, trackToNode1) || !findPath(root, nodeValue2, trackToNode2)) {
        return trackToNode1.length === 0 && trackToNode2.length === 0 ? ('NULL - Node1 & Node2 both are not found')
                : trackToNode2.length === 0 ? ('NULL - Node2 not found') : ('NULL - Node1 not found');
    }
    // console.log('TrackToNode1:', trackToNode1);
    // console.log('TrackToNode2:', trackToNode2);
    let i = 0;
    let leastCommonAncestor = trackToNode1[0];
    while (i<trackToNode1.length && i<trackToNode2.length) {
        if (trackToNode1[i] !== trackToNode2[i]) {
            break;
        }
        leastCommonAncestor = trackToNode1[i];
        i++;
    }
    return leastCommonAncestor;
}

function findPath(root, node, trackPathToNode) {
    if (root === null) {
        return false;
    }
    // ? Push the value of the node to the trackPathToNode
    trackPathToNode.push(root.value);
    if (root.value === node) {
        return true;
    }
    // ? Check if the node is present in the left subtree
    if (root.left && findPath(root.left, node, trackPathToNode)) {
        return true;
    }
    // ? Check if the node is present in the right subtree
    if (root.right && findPath(root.right, node, trackPathToNode)) {
        return true;
    }
    trackPathToNode.pop();
    return false;
}

let root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.right = new Node(9);
root.right.left = new Node(6);
root.left.left.left = new Node(1);
root.right.right.right = new Node(10);
console.log('LCA of 2 & 4 is:', findLca(root, 2, 4));
console.log('LCA of 10 & 4 is:', findLca(root, 10, 4));
console.log('LCA of 2 & 7 is:', findLca(root, 2, 7));
console.log('LCA of 1 & 4 is:', findLca(root, 1, 4));
console.log('LCA of 9 & 9 is:', findLca(root, 9, 9));
console.log('LCA of 9 & 19 is:', findLca(root, 9, 19));
console.log('LCA of 9 & 19 is:', findLca(root, 9, 5));
console.log('LCA of 91 & 19 is:', findLca(root, 91, 19));