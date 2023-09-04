# Get Path Between 2 Nodes

## Alias
- Leetcode (2096): [Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

## Problem
You are given the `root` of a binary tree with `n` nodes. Each node is uniquely assigned a value from `1` to `n`. You are also given an integer `startValue` representing the value of the start node `s`, and a different integer `destValue` representing the value of the destination node `t`.

**Find the shortest path starting from node `s` and ending at node `t`**. Generate step-by-step directions of such path as a string consisting of only the uppercase letters `'L'`, `'R'`, and `'U'`. Each letter indicates a specific direction:

- `'L'` means to go from a node to its left child node.
- `'R'` means to go from a node to its right child node.
- `'U'` means to go from a node to its parent node.

Return the step-by-step directions of the shortest path from node `s` to node `t`.

## Examples
- Example 1
   - Input
     ```
     root = [5,1,2,3,null,6,4]
     startValue = 3
     destValue = 6
     ```
   - Output
     ```
     "UURL"
     ```
   - Explanation
      - The shortest path is: `3 → 1 → 5 → 2 → 6`.

     ![eg1](https://github.com/wuyichen24/coding-interview/assets/8989447/3ed0d35d-3d67-42f0-a084-b57a960f14e1)
     
## Solutions
- Solution 1
   - Idea
      - Build 2 paths from root to the start node and destination node respectively
         - Start path: LLRRL
         - Dest path: LRR
      - Remove common prefix from those 2 paths
         - Start path: LRRL   (remove L)
         - Dest path: RR      (remove L)
      - Replace all the steps in the start path by U and add the start path to the destination path
         - New start path: UUUU
         - Add to the dest path: UUUURR

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
      public String getDirections(TreeNode root, int startValue, int destValue) {
          StringBuilder startSb = new StringBuilder();
          StringBuilder destSb  = new StringBuilder();

          // build 2 paths from root to the start node and destination node respectively
          find(root, startValue, startSb);
          find(root, destValue, destSb);

          int i = 0;
          int max_i = Math.min(destSb.length(), startSb.length());

          // remove common prefix from those 2 paths
          while (i < max_i && startSb.charAt(startSb.length() - i - 1) == destSb.charAt(destSb.length() - i - 1))
              ++i;
        
          // replace all the steps in the start path by U and add the start path to the destination path
          return "U".repeat(startSb.length() - i) + destSb.reverse().toString().substring(i);
      }

      private boolean find(TreeNode n, int val, StringBuilder sb) {
          if (n.val == val) 
              return true;
          if (n.left != null && find(n.left, val, sb))
              sb.append("L");
          else if (n.right != null && find(n.right, val, sb))
              sb.append("R");
          return sb.length() > 0;
      }
  }
  ```
