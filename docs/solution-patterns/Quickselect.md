# Quickselect

- [**Concepts**](#concepts)
- [**Benefit**](#benefit)
- [**Algorithm**](#algorithm)
   - [Patition](#patition)
   - [Select](#select)
- [**Find the Kth largest element**](#find-the-kth-largest-element)
- [**Complexity**](#complexity)
- [**Problems can use this pattern**](#problems-can-use-this-pattern)
- [**Notes**](#notes)
- [**References**](#references)
- [**Appendix**](#appendix)

## Concepts
- Quickselect is a selection algorithm to find the Kth smallest element in an unordered array.

## Benefit
- Reduce the average complexity from O(n<i>log</i>n) to O(n).

## Algorithm
- The algorithm is separated into 2 subprocedures: Patition and select.

### Patition
- Goal
   - Separate the array into 2 parts:
      - All elements in the 1st part are less than a certain element.
      - All elements in the 2nd part are greater than or equal to the element.
- Process
   - Pick an element as the pivot:
      - Commonly pick the most right one as the pivot.
      - You can also pick a random element as the pivot and swap it with the most right one (Better performance).
   - Declare 2 pointers:
      - j: This pointer is to iterate from left to right - 1 for checking all the elements except the pivot.
      - i: This pointer is mark the left end of the 2nd part (Elements are greater than or equal to the pivot).
   - When the pointer j is iterating from left to right - 1:
      - If the element j is smaller than the pivot, swap element i and element j.
      - Increase i by 1.
   - At the end:
      - Swap element i with the pivot (Move the pivot to the middle to separate 2 parts).
      - Return i (The index of the pivot).
- Code
  ```
  int partition(int[] nums, int left, int right) {
      int pivot = nums[right];
      int i = left;
      for (int j = left; j < right; j++) {
          if (nums[j] < pivot) {
              swap(nums[i], nums[j]);
              i = i + 1;
          }
      }
      swap(nums[i], nums[right]);
      return i;
  }
  ```

### Select
- Code (In-place)
  ```
  int select(int[] nums, int k) {
      int left  = 0;
      int right = nums.length - 1;
      
      while (left <= right) {               // Make sure "=" is in the condition
          int pivotIndex = partition(nums, left, right);
          if (pivotIndex == k) {
              return nums[pivotIndex];
          } else if (pivotIndex > k) {      // It means that k is in the 1st part, so set the right bound
              right = pivotIndex - 1;
          } else {                          // It means that k is in the 2nd part, so set the left bound
              left = pivotIndex + 1;
          }
      }
      return -1                             // If don't find it, return -1
  }
  ```
- Note
   - K is 0-based (K = 0 is to find the 1st smallest element).

## Find the Kth largest element
- Find the Kth largest element = Find the (N-K)th smallest element.

## Complexity
- Time complexity
   - Average case: O(n)
   - Worst case: O(n<sup>2</sup>)
- Space complexity
   - O(1)

## Problems can use this pattern
- Top K and Kth

## Notes
- The partition process is same as Quicksort.
- The performance is sensitive to which pivot is chosen.

## References
- https://en.wikipedia.org/wiki/Quickselect
- https://www.geeksforgeeks.org/quickselect-algorithm/
- https://www.techseries.dev/products/coderpro/categories/1831147/posts/6283428

## Appendix
- Example of patition process

![Untitled (5)](https://user-images.githubusercontent.com/8989447/115977836-bfd39c00-a538-11eb-8b72-063a1c6e6070.png)

