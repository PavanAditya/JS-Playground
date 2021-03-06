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
    public boolean isValidSequence(TreeNode root, int[] arr) {
        if(root == null) 
            return false; 
        return existPathUtil(root, arr, arr.length, 0); 
    }
    private boolean existPathUtil(TreeNode root, int arr[], int n, int index) { 
        if(root == null || index==n)  
                return false;  
        
        if (root.left == null &&  root.right == null) { 
            if((root.val == arr[index]) && (index == n-1))  
                return true;  
    
           return false; 
        }  
       
        return ((index < n) && (root.val == arr[index])  
            &&  (existPathUtil(root.left, arr, n, index+1) 
            || existPathUtil(root.right, arr, n, index+1) )); 
    } 
}