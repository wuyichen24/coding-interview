# Two Sum of Sorted Array

## Alias
- Leetcode (167): [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

## Problem
Given an array of integers `nums` and an integer `target`, **return indices of the two numbers such that they add up to target**.

Notes:
- There is only one solution.
- You may not use the same element twice.
- Input array is sorted.

You can return the answer in any order.

## Examples
- Example 1
   - Input
     ```
     nums = [2,7,11,15]
     target = 9
     ```
   - Output
     ```
     [0,1]
     ```
- Example 2
   - Input
     ```
     nums = [2,3,4]
     target = 6
     ```
   - Output
     ```
     [0,2]
     ```
- Example 3
   - Input
     ```
     nums = [-1,0]
     target = -1
     ```
   - Output
     ```
     [0,1]
     ```

## Solutions
- **Solution 1: 2 pointers**
   - Idea
      - Based on the sum of 2 pointers, move 2 pointers correspondingly.
   - Steps
      - Let the `lo` pointer points to the leftmost element, let the `hi` pointer points to the rightmost element.
      - Compare the sum of 2 pointers with the target value:
          - Sum < target
             - Move the `lo` pointer to next right element.
          - Sum > target
             - Move the `hi` pointer to next left element.
          - Sum = target
             - Return the indexes of 2 pointers.
  ```java
  public int[] twoSum(int[] nums, int target) {
      int lo = 0, hi = nums.length - 1;
      while (lo < hi) {
          int sum = nums[lo] + nums[hi];
          if (sum < target) {
              lo++;
          } else if (sum > target) {
              hi--;
          } else if (sum == target) {
              return new int[]{nums[lo], nums[hi]};
          }
      }
      return new int[]{};
  }
  ```
