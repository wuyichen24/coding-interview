# Find Local Minimum

## Alias

## Problem
Find any one local minimum from the array. A local minimum is defined as an integer in the array that is less than or equal to its neighbors.

## Solutions
- **Solution 1: Linear search**
   - Idea
      - Search from left to right and compair with the next element.
   - Note
      - No need to check both neighbor, because if you can reach the current `i`th element, it means that `nums[i-1] > nums[i]`.

  ```java
  int findLocalMinimum(int[] nums) {
      for (int i = 0; i < nums.length; i++) {
          if (nums[i] <= nums[i+1]) {
              return i;
          }
      }

      return nums.length - 1;
  }
  ```

- **Solution 2: Binary search**
   - Idea
      - Compare middle element with its neighbors.
          - If middle element is not greater than any of its neighbors, then we return it.
          - If the middle element is greater than its left neighbor, then there is always a local minima in left half.
          - If the middle element is greater than its right neighbor, then there is always a local minima in right half.

  ```java
  int findLocalMinimum(int[] nums) {
      int left = 0
      int right = nums.length - 1;

      while (left < right) {
          int mid = left + (right - left) / 2;
          if (nums[mid] >= nums[mid+1]) {
              left = mid + 1;
          } else if (mid == 0 || nums[mid] <= arr][mid-1]) {
              return mid;
          } else {
              right = mid - 1;
          }
      }
      return left;
  }
  ```
