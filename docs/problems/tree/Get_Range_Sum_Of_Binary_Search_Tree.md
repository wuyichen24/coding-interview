# Get Range Sum of Binary Search Tree

## Alias
- Leetcode (938): [Range Sum of BST](https://leetcode.com/problems/range-sum-of-bst/)

## Problem
- Get the sum of values of all nodes with a value in the range `[low, high]`.

## Solutions
- **Solution 1: Recursion**
   - Idea
      - If current value < low, only go to right child.
      - If current value > high, only go to left child.
      - If low <= current value < high, go to both left child and right child.
     
  ```java
  public int rangeSumBST(TreeNode root, int low, int high) {
      if (root == null) return 0;
        
      int sum = 0;
      if (root.val < low) {           // If current value is less than range, only consider right child
          sum = sum + rangeSumBST(root.right, low, high);
      } else if (root.val > high) {   // If current value is more than range, only consider left child
          sum = sum + rangeSumBST(root.left, low, high);
      } else {                        // If current value is in the range, add current value and consider both left child and right child
          sum = sum + root.val;
          sum = sum + rangeSumBST(root.left, low, high);
          sum = sum + rangeSumBST(root.right, low, high);
      }
        
      return sum;
  }
  ```
