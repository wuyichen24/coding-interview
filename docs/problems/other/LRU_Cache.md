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
- **Solution 1: Hashmap + Double linked list = LinkedHashMap**
   - Requirements
      - The elements in the cache must be stored in time-sequence. So we could know which element is the least recently used.
      - We must find the value of a key quickly.
      - We must be able to insert and delete in any position quickly.
   - Select a data structure
      - Hashmap can quickly find a element, but no order
      - Linked list can remember the odrer, but slow for finding an element
      - **So we can use the combination of hashmap and linked list = LinkedHashMap**
      
