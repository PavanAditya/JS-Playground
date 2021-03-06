/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int max = Integer.MIN_VALUE;
    public int maxPathSum(TreeNode root) {
        maxAtNode(root);
        return max;
    }
    
    public int maxAtNode(TreeNode node) {
        if (node == null) {
            return 0;
        }

        int leftMax = maxAtNode(node.left);
        int rightMax = maxAtNode(node.right);

        int triangleSum = leftMax + node.val + rightMax;
        int leftSum = leftMax + node.val;
        int rightSum = rightMax + node.val;

        int maxAtNode = Math.max(node.val, Math.max(leftSum, rightSum));
        max = Math.max(max, Math.max(triangleSum, maxAtNode));

        return maxAtNode;
    }
}