# Get Top K Frequent Elements from Array

## Alias
- Leetcode (347): [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

## Problem
- Return the K most frequent elements from the input array.

## Solutions
- Solution 1: Hashmap + Priority queue
   - Idea
      - Use hashmap to counter the frequency of each element.
      - Use priority queue to keep K most frequent elements.
   - Steps
      - Create a HashMap and count the frequency of each number.
      - Create a priority queue and keep the size of K.
      - Add all elements from queue to array.
  ```java
  class Solution {
      public int[] topKFrequent(int[] nums, int k) {
          if (k == nums.length) {
              return nums;
          }
  
          Map<Integer,Integer> map = new HashMap<>();        // Create a hashmap and count the frequency of each number
          for(int num : nums) {                            
              map.put(num, map.getOrDefault(num, 0) + 1);
          }
        
          Queue<Integer> heap = new PriorityQueue<>((n1, n2) -> count.get(n1) - count.get(n2));  // Keep less frequent element first
          for (int key : map.keySet()) {                     
              queue.add(key);
              if (queue.size() > k) {                        // Keep the queue size at most K
                  queue.poll();
              }
          }
        
          int[] result = new int[k];                         // Add all elements from queue to array
          int i = 0;
          while(!queue.isEmpty()) {                          
              result[i] = queue.poll();
              i++;
          }
        
          return result;
      }
  }
  ```
- Solution 2: Frequency counter + Quickselect
