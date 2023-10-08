# Get Maximum Height from Binary Tree

## Alias
- Leetcode (104): [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## Problem
- Get the height of the binary tree;
- The height is the length of the path from the root node down to the farthest leaf node.

## Solutions
- **Solution 1: DFS**
  ```java
  public int maxDepth(TreeNode root) {
      if (root == null) return 0;
        
      int leftHeight  = maxDepth(root.left);
      int rightHeight = maxDepth(root.right);
        
      return Math.max(leftHeight, rightHeight) + 1;
  }
  ```
