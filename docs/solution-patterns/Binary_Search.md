# Binary Search

## Concepts
- Binary search is a search algorithm that finds the position of a target value within a sorted array.

## Algorithm
- **Idea**
   - Narrow down the search range by half each time.
- **Process**
   - Use upper bound and lower bound to define the search range.
   - Each time, compare the middle element in the search range with the target value.
      - If the target value = The middle element, its position in the array is returned. 
      - If the target value < The middle element, the search continues in the lower half of the search range. 
      - If the target value > The middle element, the search continues in the upper half of the search range.
- **Basic code**
  ```
  int binarySearch(int[] nums, int target) {
      int left = 0;
      int right = nums.length - 1;
      
      while (left <= right) {                            // left and right could point to the same element
          int mid = (left + right) / 2;
          if (target == nums[mid]) return mid;           // termination criteria
          if (target < nums[mid]) right = mid - 1;
          if (target > nums[mid]) left = mid + 1;
      }
      
      return -1;
  }
  ```
- **Details**
   - *Why while-loop is `while (left <= right)` rather than `while (left < right)`?*
      - If `left` and `right` are same, the search range is `[right, right]` (e.g., `[2, 2]`). But in this case, the seach range is not empty. If you terminate the while-loop under this situation, you will miss the search range `[right, right]` (e.g., `[2, 2]`).
   - *Why `left = mid + 1` rather than `left = mid` and `right = mid - 1` rather than `right = mid`?*
      - Because the search range is inclusive (e.g., `[left, right]`). Because `mid` has been searched, so the next search range could be either `[left, mid-1]` or `[mid+1, right]`.
- **Time complexity**
   - O(*log*n)

## Types
### Find a number
- **Meaning**
   - find x which `f(x) = target`
- **Search range**
   - `[left, right]`
- **Code**
  ```java
  int findNumber(int[] nums, int target) {
      int left = 0;
      int right = nums.length - 1;
      
      while (left <= right) {
          int mid = (left + right) / 2;
          if (target == nums[mid]) return mid;
          if (target < nums[mid]) right = mid - 1;
          if (target > nums[mid]) left = mid + 1;
      }
      
      return -1;
  }
  ```
### Find a maximum number which is less than a target
- **Meaning**
   - Find maximum `x`, which `f(x) < target`
- **Search range**
   - [left, right)
- **Code**
  ```java
  int findMaximumNumLessThanTarget(int[] nums, int target) {
      int left = 0;
      int right = nums.length;
    
      while (left < right) {
          int mid = left + (right - left) / 2;
          if (nums[mid] == target) {
              right = mid;
          } else if (nums[mid] < target) {
              left = mid + 1;
          } else if (nums[mid] > target) {
              right = mid;
          }
      }
      return left;                            // left == right
  }
  ```

## Strategies
- If the input array for the question is sorted or "kind of sorted", consider use binary search.
- Need to figure out `x`, `f(x)` and `target`.
   - Key components
      - `x`: The input value.
      - `f(x)`: The monotonic function.
      - `target`: The target need to find or satisfy.
   - Common types
      - Find minimum `x`, which `f(x) >= target`
      - Find maximum `x`, which `f(x) <= target`
      - Find `x`, which `f(x) = target`

## Problems can use this pattern
- [Divide Two Integers](../problems/math/Divide_Two_Integers.md)
- [Search in Rotated Sorted Array](../problems/array/Search_In_Rotated_Sorted_Array.md)
- [Koko Eating Bananas](../problems/other/Koko_Eating_Bananas.md)
