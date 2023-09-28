# Is Weight Sum of Root-to-leaf Path Equal to Target Value

## Alias
- Leetcode (112): [Path Sum](https://leetcode.com/problems/path-sum/)

## Problem
Given the `root` of a binary tree and an integer `targetSum`, **return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`**.

## Examples
- Example 1
   - Input
     ```
     root = [5,4,8,11,null,13,4,7,2,null,null,null,1]
     targetSum = 22
     ```
   - Output
     ```
     true
     ```
   - Explanation

     ![pathsum1](https://github.com/wuyichen24/coding-interview/assets/8989447/d2cc3be8-2988-4d35-93ba-e003f380a2d3)

- Example 2
   - Input
     ```
     root = [1,2,3]
     targetSum = 5
     ```
   - Output
     ```
     false
     ```
   - Explanation
      - There two root-to-leaf paths in the tree:
         - `(1 --> 2)`: The sum is `3`.
         - `(1 --> 3)`: The sum is `4`.
      - There is no root-to-leaf path with `sum = 5`.

     ![pathsum2](https://github.com/wuyichen24/coding-interview/assets/8989447/ccfdef76-4761-4dbd-ab11-3ed458db0a48)

## Solutions
- **Solution 1: Recursion**
   - Idea
      - When traversing down to leave node, update the `targetSum` by `targetSum - root.value`.
      - When reaching the leaf node, check the `targetSum` is `0` or not.

  ```java
  public boolean hasPathSum(TreeNode root, int targetSum) {
      if (root == null) {
          return false;
      }

      // if this is leaf node, check the final targetSum is 0 or not
      if (root.left == null && root.right == null) {
          return targetSum - root.val == 0;
      }

      boolean leftResult  = hasPathSum(root.left, targetSum - root.val);
      boolean rightResult = hasPathSum(root.right, targetSum - root.val);

      return leftResult || rightResult;
  }
  ```
