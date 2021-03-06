/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

/* Solution 1 -- O(n^2) */

// int max(int a, int b) { 
//     return (a >= b)? a: b; 
// } 

// int height(struct TreeNode* node) {
//     if(node == NULL) 
//         return 0; 
//     return 1 + max(height(node->left), height(node->right)); 
// }

// int diameterOfBinaryTree(struct TreeNode * tree) {
//     if (tree == NULL) 
//         return 0; 

//     int leftHeight = height(tree->left); 
//     int rightHeight = height(tree->right);

//     int leftDiameter = diameterOfBinaryTree(tree->left);
//     int rightDiameter = diameterOfBinaryTree(tree->right);
//     return max(leftHeight + rightHeight, max(leftDiameter, rightDiameter));
// }

/* Solution 2 -- O(n) */

int max(int a, int b) { 
    return (a >= b)? a: b; 
}

int diameterOpt(struct TreeNode *root, int* height) {
    int leftHeight = 0, rightHeight = 0;

    int leftDiameter = 0, rightDiameter = 0; 
    if(root == NULL) {
        *height = 0; 
        return 0;
    }
    
    leftDiameter = diameterOpt(root->left, &leftHeight); /* left tree height is stored into leftHeight */
    rightDiameter = diameterOpt(root->right, &rightHeight); /* right tree height is stored into rightHeight */
    
   *height = max(leftHeight, rightHeight) + 1;
    return max(leftHeight + rightHeight, max(leftDiameter, rightDiameter));
}

int diameterOfBinaryTree(struct TreeNode * tree) {
    int* height = 0;
    return diameterOpt(tree, &height);
}

