# Is Balanced Binary Tree

## Alias
- Leetcode (110): [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)

## Problem
- Check the binary tree is balanced or not.
- Balanced binary tree is the a binary the left and right subtrees of every node differ in height by no more than 1.
- Return true if the binary tree is balanced.

## Solutions
- Solution 1: Top-down recursion
   - Get the height of the binary tree.
   - When getting the height:
      - Use -1 as a signal to indicate the sub-tree is not balanced.
      - Return the height if both of the left sub-tree and the right sub-tree are balanced.
  ```java
  public boolean isBalanced(TreeNode root) {
      int height = getHeight (root);
      return height != -1;
  }
    
  public int getHeight (TreeNode root) {
      if (root == null) {
          return 0;
      }
        
      int heightLeft  = getHeight(root.left);
      int heightRight = getHeight(root.right);
        
      if (heightLeft == -1 || heightRight == -1) {            // If any of sub-tree is not balanced, return -1 (The signal of imbalanced)
          return -1;
      } else if (Math.abs (heightLeft - heightRight) > 1) {   // If the height difference is greater, return -1 (The signal of imbalanced)
          return -1;
      } else {                                                // In other case, return the new height.
          return Math.max(heightLeft, heightRight) + 1;
      }
  }
  ```
