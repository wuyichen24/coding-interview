# Get Lowest Common Ancestor from Binary Tree

## Alias
- Leetcode (236): [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

## Problem
- Get the lowest common ancestor (LCA) of two nodes in a binary tree.

## Solutions
- **Solution 1: Recursion**
   - Idea
      - Recursively call left child and right child to see they are the LCA of 2 nodes or not.
   - Steps
      - Base case
         - If the current node is null, stop
         - If 2 nodes are pointing to the current node, so the current node is LCA.
      - Recursion
         - Recursively call left child and right child to see they are the LCA of 2 nodes or not.
      - Check 3 cases
         - Case 1: If the current node is the LCA of 2 nodes, so the current node is the LCA.
         - Case 2: If 2 nodes don't exist in the subtree of the current node, so there is no LCA in the subtree.
         - Case 3: If LCA is either in left subtree or right subtree, use the LCA from left subtree or right subtree.
  ```java
  public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
      // base case
      if (root == null) return null;
      if (root == p || root == q) return root;

      TreeNode left = lowestCommonAncestor(root.left, p, q);
      TreeNode right = lowestCommonAncestor(root.right, p, q);
      // Case 1
      if (left != null && right != null) {
          return root;
      }
      // Case 2
      if (left == null && right == null) {
          return null;
      }
      // Case 3
      return left == null ? right : left;
  }
  ```
