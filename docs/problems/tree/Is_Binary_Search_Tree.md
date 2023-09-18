# Is Binary Search Tree

## Alias
- Leetcode (98): [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

## Problem
- Check the binary tree is a binary search tree.
- Return true if the binary tree is a binary search tree.

## Solutions
- **Solution 1: Use the rule - In a binary search tree, in-order traversal retrieves the keys in ascending sorted order**.
   - Idea
      - In-order traverse the binary tree and save the values in a list.
      - Check the list is in ascending order.
  ```java
  class Solution {
      List<Integer> ascendingList;
    
      public boolean isValidBST(TreeNode root) {
          this.ascendingList = new ArrayList<>();
          traverseInOrder(root);
        
          for (int i = 0; i < this.ascendingList.size() - 1; i++) {
              if (this.ascendingList.get(i) >= this.ascendingList.get(i+1)) {
                  return false;
              }
          }
        
          return true;
      }
    
      public void traverseInOrder(TreeNode node) {
          if (node == null) {
              return;
          }
        
          traverseInOrder(node.left);
          this.ascendingList.add(node.val);
          traverseInOrder(node.right);
      }
  }
  ```
- **Solution 2: Valid range**
   - Idea
      - Use the concept of binary tree: left child should be less than the node, right child should be more than the node.
      - When doing the recusion call on either left child and right child, use the value of the current node as upper boundary and lower boundary.  
  ```java
  public boolean isValidBST(TreeNode root) {
      return isValidBST(root, null, null);
  }
    
  public boolean isValidBST(TreeNode root, Integer min, Integer max) {
      if (root == null) return true;
        
      if ((min != null && root.val <= min) || (max != null && root.val >= max)) {
          return false;
      }
        
      return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
  }
  ```
