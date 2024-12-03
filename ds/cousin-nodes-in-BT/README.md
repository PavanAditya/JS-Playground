### Binary Tree Cousin Nodes

You are given a binary tree and a target node. Your task is to implement a function that finds all the "cousin nodes" of the given target node. Cousin nodes are defined as nodes that are at the same level of the tree but have different parents.

Write a function with the following signature:

```find_cousins(root: TreeNode, target: TreeNode) -> List[TreeNode]```

The function should return a list of all cousin nodes for the given target node.

Requirements:

If the target node is the root or doesn't exist in the tree, return an empty list.
If the target node has no cousins, return an empty list.
The function should work for any binary tree, not just a binary search tree.
Optimize your solution for both time and space complexity.
Example:
Consider the following binary tree:

```
   1
 /   \
2     3
/ \   / 

4   5 6   7
/   /
8   9
```

* If the target node is 5, the function should return [6, 7].
* If the target node is 8, the function should return [9].
* If the target node is 2, the function should return [3].
* If the target node is 1 or any node not in the tree, the function should return [].

Your implementation should efficiently traverse the tree, identify the level and parent of the target node, and then find other nodes at the same level with different parents. Consider how you will handle various edge cases and optimize your algorithm for performance.