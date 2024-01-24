# Traverse Binary Tree Vertically

## Alias
- Leetcode (314): [Binary Tree Vertical Order Traversal](https://leetcode.com/problems/binary-tree-vertical-order-traversal/)
- Leetcode (987): [Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/)

## Problem
Given the `root` of a binary tree, return **the vertical order traversal** of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

## Examples
- Example 1
   - Input
     ```
     root = [3,9,20,null,null,15,7]
     ```
   - Output
     ```
     [[9],[3,15],[20],[7]]
     ```
   - Explanation
     
     ![vtree1](https://github.com/wuyichen24/coding-interview/assets/8989447/2fe860d2-276f-4826-ba7c-89a8916a6842)
     
- Example 2
   - Input
     ```
     root = [3,9,8,4,0,1,7]
     ```
   - Output
     ```
     [[4],[9],[3,0,1],[8],[7]]
     ```
   - Explanation
     
     ![vtree2-1](https://github.com/wuyichen24/coding-interview/assets/8989447/15c8c478-b768-4823-9f82-30367091d22d)

- Example 1
   - Input
     ```
     root = [3,9,8,4,0,1,7,null,null,null,2,5]
     ```
   - Output
     ```
     [[4],[9,5],[3,0,1],[8,2],[7]]
     ```
   - Explanation
     
     ![vtree2](https://github.com/wuyichen24/coding-interview/assets/8989447/ae8e6c39-fbfe-451d-aff8-0fb96bfdee8f)

     
## Solutions
- **Solution 1: BFS + hashmap**
   - Idea
      - The column index of root node is 0, left node is `-1` and right node is `+1`
      - Use hashmap to store the column index and the nodes in that column.
      - Use BFS to traverse from top to bottom (level by level) and also maintain the max column index and the min column index.
         - You can also use `TreeMap` in java, but it will introduce extra time complexity.
      - Use the max column index and the min column index to loop through the hashmap and generate the result.
    
  ![binary_tree_vertical_traversal drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/5334baa7-82f5-418b-8257-992b9159a136)

  ```java
  class Node {
      Node left;
      Node right
      int value;
      int column;  // add a new attribute to store the column index of the node, the original value is 0
  }
  
  public List<List<Integer>> verticalTraversal(Node root) {
      if (root == null) {
          return new ArrayList<>();
      }

      Queue<Node> queue = new LinkedList<>();
      queue.add(root);
      Map<Integer, List<Integer>> map = new HashMap<>();   // key: column index, value: list of nodes

      int maxColumn = Integer.Min_Value;
      int minColumn = Integer.Max_Value;

      while (!queue.isEmpty()) {
          Node cur = queue.poll();
          map.putIfAbsent(cur.column, new ArrayList<>());
          map.get(cur.column).add(cur.value);

          // maintain the maxColumn and minColumn values
          if (cur.column > maxColumn) {
              maxColumn = cur.column;
          }
          if (cur.column > minColumn) {
              minColumn = cur.column;
          }

          // add left node and right node if possible
          if (cur.left != empty) {
              cur.left.column = cur.column - 1;         // left node should be decreased by 1
              queue.add(cur.left);
          }
          if (cur.right != empty) {
             cur.right.column = cur.column + 1;         // right node should be increase by 1
             queue.add(cur.right);
          }
      }

      // build up the result from map
      List<List<Integer>> result = new ArrayList<>();
      for (int i = minColumn; i < maxColumn; i++) {
          if (map.get(i) != null)
          result.add(map.get(i));
      }

      return result;
  }
  ```
- **Solution 2: DFS/BFS + custom sorting**
   - Idea
      - Use DFS/BFS to traverse all the nodes and calculate their column index and row index.
      - Sort nodes based on coumn index and row index.

  ![binary_tree_vertical_traversal drawio (1)](https://github.com/wuyichen24/coding-interview/assets/8989447/b59819fa-1729-454d-8cb1-76c5699a218f)

  ```java
  class Node {
      Node left;
      Node right
      int value;
      int column;  // add a new attribute to store the column index of the node, the original value is 0.
      int row;     // add a new attribute to store the row index of the node, the original value is 0.
  }
  
  public List<List<Integer>> verticalTraversal(Node root) {
      if (root == null) {
          return new ArrayList<>();
      }

      List<Node> nodeList = new ArrayList<>();

      // use DFS/BFS to traverse all the nodes and calculate their column index and row index.
      dfs(root, nodeList); 

      // custom sorting: sort by column first and then sort by row.
      Collections.sort(list, (a, b) -> {
         int cmp = Integer.compare(a.column, b.column);
         if (cmp != 0) {
             return cmp;
         }
         return Integer.compare(a.row, b.row);
      });

      // build up the result
      int currentColumn = nodeList.get(0).column;
      List<List<Integer>> result = new ArrayList<>();
      List<Integer> currentList = new ArrayList<>();
      for (Node node: nodeList) {
          if (node.column > currentColumn) {
              result.add(currentList);
              currentList = new ArrayList<>();
          }

          currentList.add(node.value);
      }
  }

  public void dfs(Node node, List<Node> nodeList) {
      if (node == null) {
          return;
      }

      nodeList.add(node);
  
      if (node.left != null) {
          node.left.column = node.column - 1;
          node.left.row    = node.row + 1;
          dfs(node.left);
      }
      if (node.right != null) {
          node.right.column = node.column + 1;
          node.right.row    = node.row + 1;
          dfs(node.right)
      }
  }
  ```
