# Move Zeroes to End of Array

## Alias
- Leetcode (283): [Move Zeroes](https://leetcode.com/problems/move-zeroes/)

## Problem
Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

## Examples
- Example 1
   - Input
     ```
     [0,1,0,3,12]
     ```
   - Output
     ```
     [1,3,12,0,0]
     ```

## Solutions
- **Solution 1: Fast slow pointers**
   - Idea
      - Remove all the occurrences of `0`.
         - Like [Remove All Occurrences of Value from Array](Remove_All_Occurrences_Of_Value_From_Array.md), use one pointer (fast pointer) to traverse the whole array, and another pointer (slow) points to the end element of the unmatched sequence.
      - Add `0` at the end of the array.
    
  ```java
  class Solution {
      public void moveZeroes(int[] nums) {
          int p = removeElement(nums, 0);   // remove all the occurrences of 0
          for (; p < nums.length; p++) {    // add 0s after p
              nums[p] = 0;
          }
      }

      // remove all the occurrences of value
      int removeElement(int[] nums, int val) {
          int i = 0;                              // slow pointer
          for (int j = 0; j < nums.length; j++) { // faster pointer
              if (nums[j] != val) {
                  nums[i] = nums[j];
                  i++;
              }
          }
          return i;
      }   
  }
  ```
