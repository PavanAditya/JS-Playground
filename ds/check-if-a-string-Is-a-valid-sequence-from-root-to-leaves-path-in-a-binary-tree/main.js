// ? Creating a Node for a Binary Tree which stores the value left and right reference pointers.
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// ? String to keep track of the sequence of nodes visited.
let sequenceStr = '';

// ? Check for a valid sequence from root to leaves path in a binary tree. (Recursive Function)
const checkValidSequence = (tree, checkArrSeq) => {
    const checkStr = checkArrSeq.join('');
    if (!tree && sequenceStr !== checkStr)
        return false;
    sequenceStr += tree.value;
    if (sequenceStr === checkStr && (tree.left || tree.right))
        return false;
    if (sequenceStr === checkStr && !tree.left && !tree.right)
        return true;
    if (tree.left && (sequenceStr + tree.left.value === checkStr.split('').slice(0, sequenceStr.length + 1).join('')))
        return checkValidSequence(tree.left, checkArrSeq);
    if (tree.right && (sequenceStr + tree.right.value === checkStr.split('').slice(0, sequenceStr.length + 1).join('')))
        return checkValidSequence(tree.right, checkArrSeq);
    return false;
};

/*
 * The Input tree is as follows:

                1
              /   \
             /     \
            /       \
           /         \
          /           \
         /             \
        1               0
      /   \           /   \
     /     \         /     \
    0       0       0       1
   /       / \     / \     /
  1       0   1   1   0   0   

  * The Valid Sequences for the above tree are:
  * 1,1,0,1
  * 1,1,0,0
  * 1,0,0,1
  * 1,0,0,0
  * 1,0,1,0
*/

const tree = new Node(1);

tree.left = new Node(1);
tree.left.left = new Node(0);
tree.left.left.left = new Node(1);
tree.left.left.right = null;
tree.left.right = new Node(0);
tree.left.right.left = new Node(0);
tree.left.right.right = new Node(1);

tree.right = new Node(0);
tree.right.left = new Node(0);
tree.right.left.left = new Node(1);
tree.right.left.right = new Node(0);
tree.right.right = new Node(1);
tree.right.right.left = new Node(0);
tree.right.right.right = null;

// console.log(checkValidSequence(tree, [1, 1, 0, 1])); // ? Output: true
// console.log(checkValidSequence(tree, [1, 0, 0, 0])); // ? Output: true
// console.log(checkValidSequence(tree, [1, 0, 0, 1])); // ? Output: true
// console.log(checkValidSequence(tree, [1, 1, 1, 1])); // ? Output: false
// console.log(checkValidSequence(tree, [1, 1, 1])); // ? Output: false
console.log(checkValidSequence(tree, [1, 0, 1])); // ? Output: false