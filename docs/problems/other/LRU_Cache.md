# LRU Cache

## Alias
- Leetcode (146): [LRU Cache](https://leetcode.com/problems/lru-cache/)

## Problem
Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the `LRUCache` class:

- `LRUCache(int capacity)` Initialize the LRU cache with **positive** size capacity.
- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.
- `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict the least recently used key**.

The functions `get` and `put` must each run in *O(1)* average time complexity.

## Solutions
- **Solution 1: Hashmap + Double linked list**
   - Understand requirements:
      - The elements in the cache must be stored in time-sequence. So we could know which element is the least recently used.
      - We must find the value of a key quickly.
      - We must be able to insert and delete in any position quickly.
   - Select a data structure:
      - Hashmap can quickly find a element, but no order.
      - Linked list can remember the order, but slow for finding an element.
      - **So we can use the combination of hashmap and linked list**
   - `Node` class
     ```java
     class Node {
         public int key, val;
         public Node next, prev;       // point to next node and previous node
         public Node(int k, int v) {
             this.key = k;
             this.val = v;
         }
     }
     ```
   - `DoubleList` class
     ```java
     class DoubleList {  
         private Node head, tail;  
         private int size;
 
         // constructor
         public DoubleList() {
             head = new Node(0, 0);
             tail = new Node(0, 0);
             head.next = tail;
             tail.prev = head;
             size = 0;
         }

         // add a node at last
         public void addLast(Node x) {
             x.prev = tail.prev;
             x.next = tail;
             tail.prev.next = x;
             tail.prev = x;
             size++;
         }

         // remove a node at certain position
         public void remove(Node x) {
             x.prev.next = x.next;
             x.next.prev = x.prev;
             size--;
         }
    
         // remove the first node ()
         public Node removeFirst() {
             if (head.next == tail)
                 return null;
             Node first = head.next;
             remove(first);
             return first;
         }

         public int size() { return size; }
     }
     ```
   - `LRUCache` class (basic + constructor)
     ```java
     class LRUCache {
         // key -> Node(key, val)
         private HashMap<Integer, Node> map;
         // Node(k1, v1) <-> Node(k2, v2)...
         private DoubleList cache;
         // 最大容量
         private int cap;
 
         public LRUCache(int capacity) {
             this.cap = capacity;
             map = new HashMap<>();
             cache = new DoubleList();
         }
     }
     ```
   - `LRUCache` class (helper functions)
     ```java
     class LRUCache {
         // update a key as most recent
         private void makeRecently(int key) {
             Node x = map.get(key);
             cache.remove(x);    // remove the node
             cache.addLast(x);   // add the node to tail
         }

         // add a most recent element
         private void addRecently(int key, int val) {
             Node x = new Node(key, val);
             cache.addLast(x);   // add the node to tail
             map.put(key, x);
         }

         // remove by key
         private void deleteKey(int key) {
             Node x = map.get(key);
             cache.remove(x);
             map.remove(key);
         }

         // remove least recent element
         private void removeLeastRecently() {
             Node deletedNode = cache.removeFirst();   // remove the first node
             int deletedKey = deletedNode.key;
             map.remove(deletedKey);
         }
     }
     ```
   - `LRUCache` class (`get` and `put`)
     ```java
     class LRUCache {
         public int get(int key) {
             if (!map.containsKey(key)) {
                 return -1;
             }
             makeRecently(key);      // make the key as most recent
             return map.get(key).val;
         }

         public void put(int key, int val) {
             if (map.containsKey(key)) {  // if the element exist,
                 deleteKey(key);          // delete the element
                 addRecently(key, val);   // add it back as most recent
                 return;
             }
         
             if (cap == cache.size()) {   // if cache is full,
                 removeLeastRecently();   // remove least recent
             }
     
             addRecently(key, val);       // add the new element as most recent
         }
     }
     ```
- **Solution 2: Use Java build-it data structure**
