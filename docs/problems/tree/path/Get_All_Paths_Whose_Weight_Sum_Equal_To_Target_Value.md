# Get All Paths Whose Weight Sum Equal to Target Value

## Alias
- Leetcode (437): [Path Sum III](https://leetcode.com/problems/path-sum-iii/)

## Problem
Given the `root` of a binary tree and an integer `targetSum`, **return the number of paths where the sum of the values along the path equals `targetSum`**.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

## Examples
- Example 1
   - Input
     ```
     root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
     ```
   - Output
     ```
     3
     ```
   - Explanation

     ![pathsum3-1-tree](https://github.com/wuyichen24/coding-interview/assets/8989447/fd3b5fef-0080-41a0-9321-9c84506ebb48)

## Solutions
- **Solution 1: Recursion + Prefix Sum Array**
   - Idea
      - View binary tree as an array, use prefix sum array to calculate the sum of a range in the array.
      - Use a map to record the sum of the path from the root node
         - Key: The path sum from the root node to the current node.
         - Value: The number of times that path sum occurs.
    
  ```java
  class Solution {
      // key: the pathSum from root, value: number of paths has that pathSum
      HashMap<Integer, Integer> preSumCount = new HashMap<>();

      int pathSum, targetSum;
      int count = 0;

      public int pathSum(TreeNode root, int targetSum) {
          if (root == null) {
              return 0;
          }
          this.pathSum = 0;
          this.targetSum = targetSum;
          this.preSumCount.put(0, 1);
          traverse(root);
          return count;
      }

      void traverse(TreeNode root) {
          if (root == null) {
              return;
          }

          // pre-order operations
          pathSum += root.val;
          count += preSumCount.getOrDefault(pathSum - targetSum, 0);           // determine the number of times a pathSum has occured upto the current node
          preSumCount.put(pathSum, preSumCount.getOrDefault(pathSum, 0) + 1);  // record current pathSum to the map, to use it during the child nodes processing

          traverse(root.left);
          traverse(root.right);

          // post-order operations
          preSumCount.put(pathSum, preSumCount.get(pathSum) - 1);              // remove current pathSum from the map, in order not to use it during the parallel subtree processing
          pathSum -= root.val;
      }
  }
  ```
