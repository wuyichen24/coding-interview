# Get Top K Frequent Elements from Array

## Alias
- Leetcode (347): [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

## Problem
- Return the K most frequent elements from the input array.

## Solutions
- **Solution 1: Hashmap + Priority queue**
   - Idea
      - Use hashmap to counter the frequency of each element.
      - Use priority queue to keep K most frequent elements.
   - Steps
      - Create a HashMap and count the frequency of each number.
      - Create a priority queue and keep the size of K.
      - Add all elements from queue to array.
   - Complexity
      - Time complexity: *O(Nlogk)*
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
- **Solution 2: Hashmap + Quickselect**
  ```java
  class Solution {
      int[] unique;
      Map<Integer, Integer> count;

      public int[] topKFrequent(int[] nums, int k) {
          // build hash map : character and how often it appears
          count = new HashMap();
          for (int num: nums) {
              count.put(num, count.getOrDefault(num, 0) + 1);
          }
        
          // array of unique elements
          int n = count.size();
          unique = new int[n]; 
          int i = 0;
          for (int num: count.keySet()) {
              unique[i] = num;
              i++;
          }
        
          // kth top frequent element is (n - k)th less frequent.
          // Do a partial sort: from less frequent to the most frequent, till
          // (n - k)th less frequent element takes its place (n - k) in a sorted array. 
          // All element on the left are less frequent.
          // All the elements on the right are more frequent. 
          quickselect(0, n - 1, n - k);
          // Return top k frequent elements
          return Arrays.copyOfRange(unique, n - k, n);
      }

      public void quickselect(int left, int right, int k_smallest) {
          /*
          Sort a list within left..right till kth less frequent element
          takes its place. 
          */

          // base case: the list contains only one element
          if (left == right) return;
        
          // select a random pivot_index
          Random random_num = new Random();
          int pivot_index = left + random_num.nextInt(right - left); 

          // find the pivot position in a sorted list
          pivot_index = partition(left, right, pivot_index);

          // if the pivot is in its final sorted position
          if (k_smallest == pivot_index) {
              return;    
          } else if (k_smallest < pivot_index) {
              // go left
              quickselect(left, pivot_index - 1, k_smallest);     
          } else {
              // go right 
              quickselect(pivot_index + 1, right, k_smallest);  
          }
      }

      public int partition(int left, int right, int pivot_index) {
          int pivot_frequency = count.get(unique[pivot_index]);
          // 1. move pivot to end
          swap(pivot_index, right);
          int store_index = left;

          // 2. move all less frequent elements to the left
          for (int i = left; i <= right; i++) {
              if (count.get(unique[i]) < pivot_frequency) {
                  swap(store_index, i);
                  store_index++;
              }
          }

          // 3. move pivot to its final place
          swap(store_index, right);

          return store_index;
      }
  
      public void swap(int a, int b) {
          int tmp = unique[a];
          unique[a] = unique[b];
          unique[b] = tmp;
      }  
  }
  ```
