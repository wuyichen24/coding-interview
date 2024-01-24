# Copy List with Random Pointer

## Alias
- Leetcode (138): [Copy List with Random Pointer](https://leetcode.com/problems/swap-nodes-in-pairs/)

## Problem
A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a deep copy of the list. The deep copy should consist of exactly `n` **brand new** nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. **None of the pointers in the new list should point to nodes in the original list**.

For example, if there are two nodes `X` and `Y` in the original list, where `X.random --> Y`, then for the corresponding two nodes `x` and `y` in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of `n` nodes. Each node is represented as a pair of `[val, random_index]` where:

- `val`: an integer representing `Node.val`
- `random_index`: the index of the node (range from `0` to `n-1`) that the `random` pointer points to, or `null` if it does not point to any node.

Your code will **only** be given the `head` of the original linked list.

## Examples
- Example 1
   - Input
     ```
     head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
     ```
   - Output
     ```
     [[7,null],[13,0],[11,4],[10,2],[1,0]]
     ```

     ![e1](https://github.com/wuyichen24/coding-interview/assets/8989447/6724f424-6932-429d-a506-212afe69a433)

- Example 2
   - Input
     ```
     head = [[1,1],[2,1]]
     ```
   - Output
     ```
     [[1,1],[2,1]]
     ```

     ![e2](https://github.com/wuyichen24/coding-interview/assets/8989447/6da60ff0-aff1-4e00-bf37-8b04a5a934fb)

- Example 3
   - Input
     ```
     head = [[3,null],[3,0],[3,null]]
     ```
   - Output
     ```
     [[3,null],[3,0],[3,null]]
     ```

     ![e3](https://github.com/wuyichen24/coding-interview/assets/8989447/b5a78895-67f2-44c6-bee8-c96818a853d2)

## Solutions
- **Solution 1: 2 passes + hashmap**
   - Idea
      - Scan the linked list in 2 passes
         - 1st pass: Store the mapping relationship between original node and new node in hashmap.
         - 2nd pass: Link new linked list by setting up the next and random pointers of each new node.

  ```java
  public Node copyRandomList(Node head) {
      HashMap<Node, Node> originToClone = new HashMap<>();
      // 1st pass: store the mapping relationship between original node and new node in hashmap
      // key: original node, value: new node
      for (Node p = head; p != null; p = p.next) {
          if (!originToClone.containsKey(p)) {
              originToClone.put(p, new Node(p.val));
          }
      }

      // 2nd pass: link new linked list by setting up the next and random pointers of each new node
      for (Node p = head; p != null; p = p.next) {
          if (p.next != null) {
              originToClone.get(p).next = originToClone.get(p.next);
          }
          if (p.random != null) {
              originToClone.get(p).random = originToClone.get(p.random);
          }
      }
        
      return originToClone.get(head);
  }
  ```
- **Solution 2: 1 pass + DFS**
   - Idea
      - When a node has 2 pointers (next and random), actually the linked list was became a graph, so you can use DFS traverse the graph and copy it.
      - You can use the solution in LC133 Clone graph.

  ```java
  class Solution {
      // track which node has been visited
      HashSet<Node> visited = new HashSet<>();
      // store the mapping relationship between new node and original node
      HashMap<Node, Node> originToClone = new HashMap<>();

      public Node copyRandomList(Node head) {
          traverse(head);
          return originToClone.get(head);
      }

      void traverse(Node node) {
          if (node == null) {
              return;
          }
          if (visited.contains(node)) {
              return;
          }
   
          visited.add(node);                                 // marked current node as visited

          if (!originToClone.containsKey(node)) {            // store the mapping relationship
              originToClone.put(node, new Node(node.val));
          }
          Node cloneNode = originToClone.get(node);

          traverse(node.next);                               // traverse to next node
          cloneNode.next = originToClone.get(node.next);     // build up next pointer

          traverse(node.random);                             // traverse to random node
          cloneNode.random = originToClone.get(node.random); // build up random pointer
      }
  }
  ```
