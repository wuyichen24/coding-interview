# Inversions

## Problem
A subsequence is create by deleting zero or more elements from a list while maintaining the order. For example, the subsequences of *[1,2,3]* are *[1]*, *[2]*, *[3]*, *[1,2]*, *[1,3]*, *[2,3]*, *[1,2,3]*. An inversion is a strictly decreasing subsequence of length 3. More formally, given an array. *p = p[n]* an *inversion* in the array is any time some *p[i] > p[j] > p[k]* and *i < j < k*.

Determine the number of inversions within a given array.

### Function Description
Complete the function *maxInversions* in the editor below.

*maxinversions* has the following parameter(s):

*int prices[n]*: an array of integers

### Return
*long*: a long integer denoting the number of inversions in the array.

### Constraints
- 1 <= n <= 5000
- 1 <= arr[i] <= 10<sup>6</sup>, where 0 <= i < n

## Examples
- Example 1
   - Input
     ```
     n = 5
     arr = [5,3,4,2,1]
     ```
   - Output
     ```
     7
     ```
   - Explanation
      - There are 7 inversions: [5,3,2], [5,3,1], [5,4,2], [5,4,1], [5,2,1], [3,2,1], [4,2,1].
- Example 2
   - Input
     ```
     n = 4
     arr = [4,2,2,1]
     ```
   - Output
     ```
     1
     ```
   - Explanation
      - The only inversion is [4,2,1] and there are tow instances: indices 0, 1, 3 and indices 0, 2, 3. The arrays [4,2,2] and [2,2,1] are not considered inversions because they are not strictly.
- Example 3
   - Input
     ```
     n = 5
     arr = [4,1,3,2,5]
     ```
   - Output
     ```
     1
     ```
   - Explanation
      - There is only one inversion  in the array: [4,3,2]
        
## Solutions
- Solution 1: Brute force
  ```java
  public long maxInversions(int arr[]) {
      long count = 0;
         
      for(int i = 0; i< arr[].length - 2; i++) {
          for(int j = i + 1; j < arr[].length-1; j++) {
              if(arr[i] > arr[j]) {
                  for(int k = j + 1; k < arr[].length; k++) {
                      if(arr[j] > arr[k])
                          count++;
                  }
              }
          }
      }
      return count;
  }
  ```     
