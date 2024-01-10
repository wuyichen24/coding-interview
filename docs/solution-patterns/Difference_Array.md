# Difference Array

## Concepts
- Each element in the difference array is the difference between the current element and the previous element in the original array.
- diff[i] = num[i] - num[i-1]

## Benefits
- Reduce the complexity of algorithm to modify elements in a range from O(n) to O(1).

## Construction
- Build the difference array from the original array.
  ```java
  int[] diff = new int[nums.length];

  diff[0] = nums[0];
  for (int i = 1; i < nums.length; i++) {
      diff[i] = nums[i] - nums[i - 1];
  }
  ```
- Recover the original array from the difference array.
  ```java
  int[] num = new int[diff.length];
  
  num[0] = diff[0];
  for (int i = 1; i < diff.length; i++) {
      num[i] = num[i - 1] + diff[i];
  }
  ```

## How to use

![difference](https://github.com/wuyichen24/coding-interview/assets/8989447/364ea626-162b-4bbf-b776-22f53e759085)

- To increase all the elements in the range [i, j] of the input array by x:
   - `diff[i]   = diff[i] + x`
   - `diff[j+1] = diff[j+1] - x`
- To decrease all the elements in the range [i, j] of the input array by x:
   - `diff[i]   = diff[i] - x`
   - `diff[j+1] = diff[j+1] + x`

## Problems can use this pattern
- Frequent addition and subtraction of elements in a specific range of the original array.

## Problems
