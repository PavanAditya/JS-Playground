class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root, k, result) {
    if (!root) return;

    // Traverse the left subtree
    inorderTraversal(root.left, k, result);

    // Process the current node
    result.count++;
    if (result.count === k) {
        result.value = root.val;
        return;
    }

    // Traverse the right subtree
    inorderTraversal(root.right, k, result);
}

// ? Recursive Solution
function kthSmallest1(root, k) {
    const result = { count: 0, value: null };
    inorderTraversal(root, k, result);
    return result.value;
}

// ? Iterative Solution
function kthSmallest2(root, k) {
    const stack = [];

    while (true) {
        // Go to the leftmost node
        while (root) {
            stack.push(root);
            root = root.left;
        }

        // Process the top node
        root = stack.pop();
        k--;
        if (k === 0) return root.val;

        // Move to the right subtree
        root = root.right;
    }
}

// Example Tree: 
//       5
//      / \
//     3   8
//    / \    \
//   2   4    10

const root = new TreeNode(
    5,
    new TreeNode(3, new TreeNode(2), new TreeNode(4)),
    new TreeNode(8, null, new TreeNode(10))
);

// Find the 3rd smallest element
console.log(kthSmallest1(root, 3)); // Output: 4
console.log(kthSmallest2(root, 3)); // Output: 4

// * Time Complexity: O(h+k), where h is the height of the BST. In the worst case (unbalanced BST), h=n.
// * Space Complexity: O(h), for storing the recursion stack or iterative stack.