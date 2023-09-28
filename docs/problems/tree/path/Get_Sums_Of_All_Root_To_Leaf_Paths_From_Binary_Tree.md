# Get Sums of All Root-to-leaf Paths from Binary Tree

## Alias

## Problem
- Write a function that, given a binary tree of integers, returns the sums of all the root-to-leaf paths.

## Examples
- Example 1
   - Binary tree
     ```
         2
        / \
       3   5
      / \
     1   5
     ```
   - Output: `[6, 10, 7]`

## Solutions
- Solution 1: Recursion
  ```java
  public List<Integer> getEachPathSum(TreeNode root) {
      if (root == null) {
          return new ArrayList<>();
      }

      List<Integer> resultList = new ArrayList<>();
      traverse(root, resultList, 0);
      return resultList;
  }

  public void traverse(TreeNode node, List<Integer> list, int sum) {
      if (node.left == null && node.right == null) {     // If the current node is leaf, add the sum of the current path sum into list
          list.add(sum + node.val);
      }
    
      if (node.left != null) {
          traverse(node.left, list, sum + node.val);
      }
    
      if (node.right != null) {
          traverse(node.right, list, sum + node.val);
      }
  }
  ```
