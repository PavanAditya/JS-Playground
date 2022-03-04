class Node {

    // Constructor to create a new node
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

}

// The function Compute the "height" of a tree. Height is the
// number of nodes along the longest path from the root node
// down to the farthest leaf node.
function height(node) {

    // Base Case : Tree is empty
    if (node == null)
        return 0

    // If tree is not empty then height = 1 + max of left
    // height and right heights
    return 1 + Math.max(height(node.left), height(node.right))
}

// Function to get the diameter of a binary tree
function diameter(root) {

    // Base Case when tree is empty
    if (root == null)
        return 0

    // Get the height of left and right sub-trees
    let lheight = height(root.left)
    let rheight = height(root.right)

    // Get the diameter of left and right sub-trees
    let ldiameter = diameter(root.left)
    let rdiameter = diameter(root.right)

    // Return max of the following tree:
    // 1) Diameter of left subtree
    // 2) Diameter of right subtree
    // 3) Height of left subtree + height of right subtree +1
    return Math.max(lheight + rheight + 1, Math.max(ldiameter, rdiameter))

}


// Driver Code

// Constructed binary tree is
//             1
//           /   \
//         2      3
//       /  \
//     4     5

root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

console.log('Diameter of the tree:', diameter(root));