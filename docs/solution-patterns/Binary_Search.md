# Binary Search

## Concepts
- Binary search is a search algorithm that finds the position of a target value within a sorted array.

## Algorithm
- Idea
   - Narrow down the search range by half each time.
- Process
   - Use upper bound and lower bound to define the search range.
   - Each time, compare the middle element in the search range with the target value.
      - If the target value = The middle element, its position in the array is returned. 
      - If the target value < The middle element, the search continues in the lower half of the search range. 
      - If the target value > The middle element, the search continues in the upper half of the search range.
- Code
  ```
  int binarySearch(int[] nums, int target) {
      int left = 0;
      int right = nums.length - 1;
      
      while (left <= right) {                            // left and right could point to the same element
          int mid = (left + right) / 2;
          if (target == nums[mid]) return mid;
          if (target < nums[mid]) right = mid - 1;
          if (target > nums[mid]) left = mid + 1;
      }
      
      return -1;
  }
  ```
## Complexity
- Time complexity
   - O(*log*n)

## Problems can use this pattern
- [Divide Two Integers](../problems/math/Divide_Two_Integers.md)
- [Search in Rotated Sorted Array](../problems/array/Search_In_Rotated_Sorted_Array.md)
