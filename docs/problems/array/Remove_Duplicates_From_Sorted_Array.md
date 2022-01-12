# Remove Duplicates from Sorted Array

## Alias
- Leetcode (26): [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Problem
- Remove all duplicates from a sorted array.
- Keep all the non-duplicated elements at the beginning at the array.
- Return the number of non-duplicated elements.
- The algorithm must modify the input array in-place (Cannot allocate another array).

## Solutions
- Solution 1: Fast slow pointers.
   - Use one pointer (fast pointer) to traverse the whole array, and another pointer (slow) points to the next element of the end of the sorted sequence.
   - When the values are not same for those 2 pointers:
      - Assign the value of the faster pointer to the place of the slow pointer.
      - Move the slow pointer to next element.

  ![Untitled Diagram drawio (1)](https://user-images.githubusercontent.com/8989447/149065748-37ed869e-ee47-4f8c-8b43-b26d931c75c2.png)

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
