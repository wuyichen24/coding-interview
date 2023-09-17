# Serialize and Deserialize Binary Tree

## Alias
- Leetcode (297): [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

## Problem
- Serialize and deserialize a binary tree with string.
- For the string
   - The values are separated by `,`.
   - The order of the value in the string is based on breadth-first search.
   - Empty node can be represented as `null`.
   - Adding extra `null`s to the end of the string is acceptable.

## Example

![example](https://user-images.githubusercontent.com/8989447/117589706-6cd91780-b0e8-11eb-87e0-5d5e09994864.png)

## Solutions
- **Solution 1: Breadth-first search**
   - Idea
      - Serialize
         - The extra operation in each step of BFS:
            - Check the current node is null or not:
               - If the node is null
                  - Add "null," to the string.
               - If the node is not null
                  - Add "<node.val>," to the string.
                  - Add left node and right node to the queue without checking null.
      - Deserialize
         - Split the string by `,`.
         - The extra opertion in each step of BFS:
            - Attach the next 2 elements from the string array to the current node as left node and right node.

  ```java
  public String serialize(TreeNode root) {
      if (root == null) return "";
        
      StringBuilder sb = new StringBuilder();
        
      Queue<TreeNode> queue = new LinkedList<>();
      queue.add(root);
        
      while(!queue.isEmpty()) {
          TreeNode node = queue.poll();
            
          if (node == null) {              // Check the current node is null or not
              sb.append("null" + ","); 
          } else {
              sb.append(node.val + ",");
              queue.add(node.left);        // Add left node and right node to the queue without checking null
              queue.add(node.right);
          }
      }
          
      return sb.toString();
  }

  public TreeNode deserialize(String data) {
      String[] nodes = data.split(",");
      Queue<TreeNode> queue = new LinkedList<>();
        
      TreeNode root = createTreeNode(nodes[0]); 
      queue.add(root);
        
      int i = 1;
      while(!queue.isEmpty()){
          TreeNode node = queue.poll();
          if(node != null){
              node.left = createTreeNode(nodes[i++]);    // Attach the next 2 elements from the string array to the current node as left node and right node
              node.right = createTreeNode(nodes[i++]);
                
              if(node.left!=null)  queue.add(node.left);
              if(node.right!=null) queue.add(node.right);
          }
      }
      return root;
  }
    
  private TreeNode createTreeNode(String val){
      if(val.equals("null")) return null;
      if(val.isBlank()) return null;
      return new TreeNode(Integer.valueOf(val));
  }
  ```
            
