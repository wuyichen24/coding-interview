# Get Length of Longest Path from Binary Tree

## Alias
- Leetcode (543): [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

## Problem
- Get the length of the longest path of the binary tree.
- A path may or may not pass through the root.
- The length of a path between two nodes is represented by the number of edges between them.

## Solution
- Solution 1
  ```java
  class Solution {
       private int diameter;
       public int diameterOfBinaryTree(TreeNode root) {
           diameter = 0;
           longestPath(root);
           return diameter;
       }
       private int longestPath(TreeNode node){
          if(node == null) return 0;
        
          // recursively find the longest path in both left child and right child
          int leftPath  = longestPath(node.left);
          int rightPath = longestPath(node.right);

          // update the diameter if left_path plus right_path is larger
          diameter = Math.max(diameter, leftPath + rightPath);

          // return the longest one between left_path and right_path;
          // remember to add 1 for the path connecting the node and its parent
          return Math.max(leftPath, rightPath) + 1;
      }
  }
  ```
