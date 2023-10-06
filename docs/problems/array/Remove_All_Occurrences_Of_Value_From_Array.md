# Remove All Occurrences of Value from Array

## Alias
- Leetcode (27): [Remove Element](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Problem
- Remove all occurrences of the value.
- Keep all the unmatched elements at the beginning at the array.
- Return the number of unmatched elements.
- The algorithm must modify the input array in-place (Cannot allocate another array).

## Solutions
- **Solution 1: Fast slow pointers**
   - Idea
      - Use one pointer (fast pointer) to traverse the whole array, and another pointer (slow) points to the end element of the unmatched sequence.
      - When the values are not same for those 2 pointers:
         - Assign the value of the fast pointer to the place of the slow pointer.
         - Move the slow pointer to next element.

  ```java
  public int removeElement(int[] nums, int val) {
      int i = 0;                              // slow pointer
      for (int j = 0; j < nums.length; j++) { // faster pointer
          if (nums[j] != val) {
              nums[i] = nums[j];
              i++;
          }
      }
      return i;
  }   
  ```
