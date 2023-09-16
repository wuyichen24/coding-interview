# Search in Rotated Sorted Array

## Alias
- Leetcode (33): [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## Problem
Provide a rotated sorted array `nums`, return the index of the `target`. If index doesn't exist, return `-1`

- **Explanation**
   - A sorted array: `[0,1,2,4,5,6,7]`
   - A rotated sorted array on index `3`: `[4,5,6,7,0,1,2]`
 
## Examples
- Example 1
   - Input
     ```
     nums = [4,5,6,7,0,1,2]
     target = 0
     ```
   - Output
     ```
     4
     ```
- Example 2
   - Input
     ```
     nums = [4,5,6,7,0,1,2]
     target = 3
     ```
   - Output
     ```
     -1
     ```

## Solutions
- **Solution 1: Binary search**
   - Idea
      - Find the pivot number (the smallest number) by binary search (variant).
      - Perform binary search on the left subarray of the pivot number and the right subarray of the pivot number.

  ![o1](https://github.com/wuyichen24/coding-interview/assets/8989447/d422f286-0254-4b6c-834e-804c7c34c670)

  ```java
  class Solution {
      public int search(int[] nums, int target) {
          int n = nums.length;
          int left = 0, right = n - 1;
        
          // Find the index of the pivot element (the smallest element)
          while (left <= right) {
              int mid = (left + right) / 2;
              if (nums[mid] > nums[n - 1]) {
                  left = mid + 1;
              } else {
                  right = mid - 1;
              }
          }
    
          // Binary search over elements on the pivot element's left
          int answer = binarySearch(nums, 0, left - 1, target);
          if (answer != -1) {
              return answer;
          }
        
          // Binary search over elements on the pivot element's right
          return binarySearch(nums, left, n - 1, target);
      }
    
      // Binary search over an inclusive range [left_boundary ~ right_boundary]
      private int binarySearch(int[] nums, int leftBoundary, int rightBoundary, int target) {
          int left = leftBoundary, right = rightBoundary;
          while (left <= right) {
              int mid = (left + right) / 2;
              if (nums[mid] == target) {
                  return mid;
              } else if (nums[mid] > target) {
                  right = mid - 1;
              } else {
                  left = mid + 1;
              }
          }
          return -1;
      }
  }
  ```
