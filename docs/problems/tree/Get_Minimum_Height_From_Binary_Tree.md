# Get Minimum Height from Binary Tree

## Alias
- Leetcode (111): [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

## Problem
Given a binary tree, **find its minimum depth**.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

## Examples
- Example 1
   - Input
     ```
     [3,9,20,null,null,15,7]
     ```
   - Output
     ```
     2
     ```
   - Explanation

     ![ex_depth](https://github.com/wuyichen24/coding-interview/assets/8989447/ab1219f0-cbf6-404f-9cd7-dcf87598b6e1)

## Solutions
- **Solution 1: DFS**
   - Note
      - Need to consider there is only 1 child node. Because if the current node only has left node, if we use `min(leftHeight, rightHeigh)`, the height of the current node is 0, which is incorrect.

  ```java
  public int minDepth(TreeNode root) {
      if (root == null) {
          return 0;
      }

      if (root.left == null && root.right == null) { // if this is leaf node
          return 1;
      }

      if (root.left == null && root.right != null) { // if only have right child node
          return minDepth(root.right) + 1;
      }

      if (root.left != null && root.right == null) { // if only have left child node
          return minDepth(root.left) + 1;
      }

      int leftHeight  = minDepth(root.left);
      int rightHeight = minDepth(root.right);

      return Math.min(leftHeight, rightHeight) + 1;
  }
  ```
