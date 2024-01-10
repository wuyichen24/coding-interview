# Difference Array

## Concepts
- Each element in the difference array is the difference between the current element and the previous element in the original array.
- diff[i] = num[i] - num[i-1]

## Benefits

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

## Problems can use this pattern
- Frequent addition and subtraction of elements in a specific range of the original array.

## Problems
