# Remove Duplicates from Sorted Array

## Alias
- Leetcode (26): [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Problem
- Remove all duplicates from a sorted array.
- Keep all the non-duplicated elements at the beginning at the array.
- Return the number of non-duplicated elements.
- Cannot allocate another array and the space complexity must be O(1).

## Solutions
- Solution 1: Fast slow pointers.
   - Use one pointer (faster pointer) to traverse the whole array, and another pointer (slow) points to the next element of the end of the sorted sequence.
   - When the values are not same for those 2 pointers:
      - Assign the value of the faster pointer to the place of the slow pointer.
      - Move the slow pointer to next element.
  ```java
  public int removeDuplicates(int[] nums) {
      int end_index = 1;
      for (int i = 0; i < nums.length - 1; i++) {
          if (nums[i] != nums[i+1]) {
              nums[end_index] = nums[i+1];
              end_index++;
          }
      }
      return end_index;
  }
  ```
