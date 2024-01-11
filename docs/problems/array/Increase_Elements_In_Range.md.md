# Increase Elements in Range

## Alias
- Leetcode (370): [Range Addition](https://leetcode.com/problems/range-addition/)

## Problem
You are given an integer length and an array updates where `updates[i] = [startIdxi, endIdxi, inci]`.

You have an array `arr of length `length` with all zeros, and you have some operation to apply on `arr`. In the `ith` operation, you should increment all the elements `arr[startIdxi], arr[startIdxi + 1], ..., arr[endIdxi]` by `inci`.

Return `arr` after applying all the updates.

## Examples
- Example 1
   - Input
     ```
     length = 5
     updates = [[1,3,2],[2,4,3],[0,2,-2]]
     ```
   - Output
     ```
     [-2,0,3,5,3]
     ```
- Example 2
   - Input
     ```
     length = 10
     updates = [[2,4,6],[5,6,8],[1,9,-4]]
     ```
   - Output
     ```
     [0,-4,2,2,2,4,4,-4,-4,-4]
     ```

## Solutions
- **Solution 1: Difference array**
   - Idea
      - Use difference array to Reduce the complexity for modifying elements
      - To increase all the elements in the range `[i, j]` of the input array by `x`:
         - `diff[i]   = diff[i] + x`
         - `diff[j+1] = diff[j+1] - x`

  ```java
  public int[] getModifiedArray(int length, int[][] updates) {
      int[] diff = new int[length + 1];

      for (int i = 0; i < updates.length; i++) {
          int start = updates[i][0];
          int end   = updates[i][1];
          int inc   = updates[i][2];
          diff[start] = diff[start] + inc;
          diff[end + 1] = diff[end + 1] - inc;
      }

      int[] num = new int[length];
      num[0] = diff[0];
      for (int i = 1; i < length; i++) {
          num[i] = num[i-1] + diff[i];
      }

      return num;
  }
  ```
