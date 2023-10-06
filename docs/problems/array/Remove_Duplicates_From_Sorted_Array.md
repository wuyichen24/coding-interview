# Remove Duplicates from Sorted Array

## Alias
- Leetcode (26): [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Problem
- Remove all duplicates from a sorted array.
- Keep all the non-duplicated elements at the beginning at the array.
- Return the number of non-duplicated elements.
- The algorithm must modify the input array in-place (Cannot allocate another array).

## Solutions
- **Solution 1: Fast slow pointers**
   - Idea
      - Use one pointer (fast pointer) to traverse the whole array, and another pointer (slow) points to the next element of the end of the sorted sequence.
      - When the values are not same for those 2 pointers:
         - Assign the value of the fast pointer to the place of the slow pointer.
         - Move the slow pointer to next element.

  ![Untitled Diagram drawio (1)](https://user-images.githubusercontent.com/8989447/149065748-37ed869e-ee47-4f8c-8b43-b26d931c75c2.png)

  ```java
  public int removeDuplicates(int[] nums) {
      int slow = 1;
      for (int fast = 0; fast < nums.length - 1; fast++) {
          if (nums[fast] != nums[fast+1]) {
              nums[slow] = nums[fast+1];
              slow++;
          }
      }
      return slow;
  }
  ```
