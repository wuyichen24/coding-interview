# Kth Largest Element in an Array

## Alias
- Leetcode (215): [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

## Problem
Given an integer array `nums` and an integer `k`, return the `kth` largest element in the array.

## Examples
- Example 1
   - Input
     ```
     nums = [3,2,1,5,6,4]
     k = 2
     ```
   - Output
     ```
     5
     ```
- Example 2
   - Input
     ```
     nums = [3,2,3,1,2,4,5,5,6]
     k = 4
     ```
   - Output
     ```
     4
     ```

## Solutions
- **Solution 1: Sorting**
  ```java
  public int findKthLargest(int[] nums, int k) {
      Arrays.sort(nums);
      return nums[nums.length - k];
  }
  ```

- **Solution 2: Priority queue**
  ```java
  public int findKthLargest(int[] nums, int k) {
      PriorityQueue<Integer> queue = new PriorityQueue<>();
      for (int num: nums) {
          queue.add(num);
          if (queue.size() > k) {
              queue.remove();
          }
      }
        
      return queue.peek();
  }
  ```
- **Solution 3: Quickselect**
   - Alias
      - Hoare's selection algorithm
         - It's an algorithm for finding the kth smallest element in an unordered list.
   - Idea
      - Choose a pivot index. The most common way to choose the pivot is randomly.
      - Partition nums into 3 sections:
         - Elements equal to the pivot.
         - Elements greater than the pivot.
         - Elements less than the pivot.
      - Count the elements in each section
         - `left` is the section with elements less than the pivot.
         - `mid` is the section with elements equal to the pivot.
         - `right` is the section with elements greater than the pivot.
      - For finding `kth` largest rather than smallest, swap what `left` and `right` represent - `left` will be the section with elements greater than the pivot and `right` will be the section with elements less than the pivot.
      - 
