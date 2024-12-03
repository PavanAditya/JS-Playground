// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @return {TreeNode[]}
 */
function findCousins(root, target) {
    if (!root || root === target) return [];

    const queue = [[root, null, 0]]; // [node, parent, level]
    let targetLevel = -1;
    let targetParent = null;
    const cousins = [];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let foundTarget = false;

        for (let i = 0; i < levelSize; i++) {
            const [node, parent, level] = queue.shift();

            if (node === target) {
                targetLevel = level;
                targetParent = parent;
                foundTarget = true;
            } else if (level === targetLevel && parent !== targetParent) {
                cousins.push(node);
            }

            if (node.left) queue.push([node.left, node, level + 1]);
            if (node.right) queue.push([node.right, node, level + 1]);
        }

        if (foundTarget) break;
    }

    return cousins;
}

// Test the function
function runTest() {
    // Construct the tree from the example
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    root.left.left.left = new TreeNode(8);
    root.left.right.left = new TreeNode(9);

    console.log("Cousins of 5:", findCousins(root, root.left.right).map(node => node.val));
    console.log("Cousins of 8:", findCousins(root, root.left.left.left).map(node => node.val));
    console.log("Cousins of 2:", findCousins(root, root.left).map(node => node.val));
    console.log("Cousins of 1:", findCousins(root, root).map(node => node.val));
}

runTest();


// This solution uses a level-order traversal (breadth-first search) approach to find the cousin nodes. Here's how it works:

// We use a queue to perform the level-order traversal. Each element in the queue is an array containing the node, its parent, and its level.

// We traverse the tree level by level. For each node, we check if it's the target node. If it is, we store its level and parent.

// Once we find the target node, we continue processing the current level to find its cousins (nodes at the same level with different parents).

// We return the list of cousin nodes.

// The time complexity of this solution is O(n), where n is the number of nodes in the tree, as we may need to visit all nodes in the worst case. The space complexity is O(w), where w is the maximum width of the tree, which is the space needed for the queue.

