# Traverse Binary Tree Level Order

## Alias
- Leetcode (102): [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

## Problem
Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

## Examples
- Example 1
   - Input
     ```
     root = [3,9,20,null,null,15,7]
     ```
   - Output
     ```
     [[3],[9,20],[15,7]]
     ```
   - Explanation

     ![tree1](https://github.com/wuyichen24/coding-interview/assets/8989447/f6fa76dd-66d6-4e1f-a5f7-fc47ebda1ff4)

## Solutions
- Solution 1: BFS

  ```java
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
      public List<List<Integer>> levelOrder(TreeNode root) {
          List<List<Integer>> results = new LinkedList<>();
          Queue<TreeNode> queue = new LinkedList<>();
          if (root != null) queue.add(root);
        
          while (!queue.isEmpty()) {
              int levelSize = queue.size();
              List<Integer> level = new ArrayList<>(levelSize);
              for (int i = 0; i < levelSize; i++) {
                  TreeNode cur = queue.poll();
                  if (cur.left != null) queue.add(cur.left);
                  if (cur.right != null) queue.add(cur.right);
                  level.add(cur.val);
              }
              results.add(level);
          }
        
          return results;
      }
  }
  ```
