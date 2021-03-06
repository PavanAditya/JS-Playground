class Solution {
   int maxDiameter = 0;
    public int diameterOfBinaryTree(TreeNode root) {
         if (root == null) 
            return 0; 
  
        int lheight = height(root.left); 
        int rheight = height(root.right); 
        
        int ldiameter = diameterOfBinaryTree(root.left); 
        int rdiameter = diameterOfBinaryTree(root.right); 
        
        return Math.max(lheight + rheight, 
                        Math.max(ldiameter, rdiameter));
    }
    
     public int height(TreeNode node) { 
        if (node == null) 
            return 0; 
        return (1 + Math.max(height(node.left), height(node.right))); 
    } 
}