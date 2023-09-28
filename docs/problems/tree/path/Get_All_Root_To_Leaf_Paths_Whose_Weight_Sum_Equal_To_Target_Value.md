# Get All Root-to-leaf Paths Whose Weight Sum Equal to Target Value

## Alias
- Leetcode (113): [Path Sum II](https://leetcode.com/problems/path-sum-ii/)

## Problem
Given the `root` of a binary tree and an integer `targetSum`, **return all root-to-leaf paths where the sum of the node values in the path equals `targetSum`**. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

## Examples
- Example 1
   - Input
     ```
     root = [5,4,8,11,null,13,4,7,2,null,null,5,1]
     targetSum = 22
     ```
   - Output
     ```
     [[5,4,11,2],[5,8,4,5]]
     ```
   - Explanation
      - There are two paths whose sum equals targetSum:
          - `5 + 4 + 11 + 2 = 22`
          - `5 + 8 + 4 + 5 = 22`

## Solutions
- **Solution 1: Recursion**
   - Idea
      - Use a list record the path from root to the current node.
      - When call the recursion function on the left node and the right, deep copy 2 lists from original `pathList`, so 2 path lists will be independent.

  ```java
  class Solution {
      List<List<Integer>> resultList;   // store all the paths can match targetSum
      int targetSum;

      public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
          if (root == null) {
              return new ArrayList<>();
          }

          List<Integer> pathList = new ArrayList<>();  // store the path to the current node

          this.resultList = new ArrayList<>();
          this.targetSum = targetSum;

          traverse(root, pathList, 0);

          return resultList;
      }

      public void traverse(TreeNode node, List<Integer> pathList, int sum) {
          if (node == null) {
              return;
          }

          // if current node is leaf and sum is equal to the targetSum, save the pathList as one possible result
          if (node.left == null && node.right == null && sum + node.val == targetSum) {
              pathList.add(node.val);
              resultList.add(pathList);
              return;
          }

          pathList.add(node.val);

          // deep copy pathList as 2 different lists for left and right respectively
          List<Integer> leftPathList  = new ArrayList<>(pathList);
          List<Integer> rightPathList = new ArrayList<>(pathList);
          traverse(node.left, leftPathList, sum + node.val);
          traverse(node.right, rightPathList, sum + node.val);
      }
  }
  ```
