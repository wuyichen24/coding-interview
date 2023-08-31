# Get Right Side View of Binary Tree

## Alias
- Leetcode (199): [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)

## Problem
- Get the right side view of a binary tree.
- Right side view is a list of nodes which you can see on the right side of the binary tree.

## Example
- Example 1
   - Tree

     ![right](https://user-images.githubusercontent.com/8989447/117553741-72fbc500-b010-11eb-80a4-50ecc795e491.png)
   - Right side view: [1, 3, 4, 7]

## Solutions
- Solution 1: Breadth-first search + Sentinel
   - Use a sentinel node (like `null`) to separate the levels.
   - When doing the Breadth-first search
      - If the current node is null (it means we hit the end of the current level).
          - The last node we visit is the end of the current level, add the last node to the result list.
          - Push null in the queue to mark the end of the next level.

  ![queue](https://user-images.githubusercontent.com/8989447/117553974-fc5fc700-b011-11eb-8f34-bd3726691a8d.png)

  ```java
  public List<Integer> rightSideView(TreeNode root) {
      if (root == null) return new ArrayList<Integer>();
        
      List<Integer> resultList = new ArrayList<>();
            
      Queue<TreeNode> queue = new LinkedList<>();
      queue.add(root);
      queue.add(null);                          // Use null to mark the end of the 1st level
        
      TreeNode lastNode = root;
      while (!queue.isEmpty()) {
          TreeNode currNode = queue.poll();
            
          if (currNode != null) {               // If the current node is not null, do normal steps for BFS
              if (currNode.left != null) {
                  queue.add(currNode.left);
              }
              if (currNode.right != null) {
                  queue.add(currNode.right);
              }
          } else {                              // If the current node is null (it means we hit the end of the current level)
              resultList.add(lastNode.val);     // Add the last node we visit into the result list
              if (!queue.isEmpty()) {           // Add a null to the queue to mark the end of the next level
                  queue.add(null);              // (check the queue is empty or not is to prevent dead loop)
              }
          }
            
          lastNode = currNode;                  // Update the last node we visit
      }
        
      return resultList;
  }
  ```
