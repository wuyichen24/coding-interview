# Get Maximum Sum Weight of Path from Binary Tree

## Alias
- Leetcode (124): [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

## Problem
- Get the maximum sum of the path from a binary tree.
- The path sum of a path is the sum of the node's values in the path.
- A path may or may not pass through the root.

## Solutions
- **Solution 1: Recursion**
   - Use a parameter outside the function to record the maxinum path sum.
   - Max gain
      - Max gain of the current node is the maximum sum of the left path or right path from the current node.
      - Max gain of the current node can be calculated: Max(leftMaxGain, rightMaxGain) + current node's value.

        ![ds](https://user-images.githubusercontent.com/8989447/117596845-85a1f700-b101-11eb-8b27-bedd14f7ff74.png)
   - For each node:
      - Get the max gain from left node and right node.
      - Consider the new path [left branch, current node, right branch]
         - Update maxPathSum if the sum of the new path is greater.
      - Return the max gain of the current node
         - Max gain of the current node: Max(leftMaxGain, rightMaxGain) + current node's value.

        ![newpath](https://user-images.githubusercontent.com/8989447/117597162-49bb6180-b102-11eb-912b-c70f49a85372.png)
  ```java
  class Solution {
      int maxPathSum = Integer.MIN_VALUE;                      // Record the max path sum
    
      public int maxPathSum(TreeNode root) {
          getMaxGain(root);
          return maxPathSum;
      }
    
      public int getMaxGain(TreeNode node) {                   // Get the max gain from the current node
          if (node == null) return 0;

          int leftGain  = Math.max(getMaxGain(node.left), 0);  // Get the max gain from the left sub-tree
          int rightGain = Math.max(getMaxGain(node.right), 0); // Get the max gain from the right sub-tree

          int newPathSum = node.val + leftGain + rightGain;    // Calculate the sum of the new path (left <-> current <-> right)

          maxPathSum = Math.max(maxPathSum, newPathSum);       // Update maxPathSum if the sum of the new path is greater

          return node.val + Math.max(leftGain, rightGain);     // Return the max gain from the current node (can only pick one sub-tree)
      }
  }
  ```
