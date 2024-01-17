# Remove Covered Intervals

## Alias
- Leetcode (1288): [Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/)

## Problem
Given an array intervals where `intervals[i] = [li, ri]` represent the interval `[li, ri)`, remove all intervals that are covered by another interval in the list.

The interval `[a, b)` is covered by the interval `[c, d)` if and only if `c <= a and b <= d`.

Return the number of remaining intervals.

## Examples
- Example 1
   - Input
     ```
     intervals = [[1,4],[3,6],[2,8]]
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - Interval `[3,6]` is covered by `[2,8]`, therefore it is removed.
- Example 2
   - Input
     ```
     intervals = [[1,4],[2,3]]
     ```
   - Output
     ```
     1
     ```

## Solutions
- **Solution 1**
   - Idea
      - Sort intervals by start point.
        
        <img width="604" alt="Screenshot 2024-01-17 at 2 51 03 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/f8a3766c-b162-4082-bdf9-c6bd30531e52">

      - Compare 2 adjacent intervals and handle 3 cases
         - (1) Covered: increase the counter by 1.
         - (2) Overlapping: update the end point by the end point of the new interval.
         - (3) Disjoint: update the start point and end point as the new intervals

         <img width="704" alt="Screenshot 2024-01-17 at 2 51 19 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/28bbd7a5-4f59-4354-9a09-405f75dbc2ca">

  ```java
  public int removeCoveredIntervals(int[][] intervals) {
      Arrays.sort(intervals, (a, b) -> {
          if (a[0] == b[0]) {
              return b[1] - a[1];
          }
          return a[0] - b[0]; 
      });

      // save the current interval
      int left = intervals[0][0];
      int right = intervals[0][1];
    
      int res = 0;
      for (int i = 1; i < intervals.length; i++) {
          int[] intv = intervals[i];

          // 1. covered: increase the counter by 1
          if (left <= intv[0] && right >= intv[1]) {
              res++;
          }

          // 2. overlapping: update the end of the current interval
          if (right >= intv[0] && right <= intv[1]) {
              right = intv[1];
          }
          // 3. disjoint: set the new interval as the current interval
          if (right < intv[0]) {
              left = intv[0];
              right = intv[1];
          }
      }
    
      return intervals.length - res;
  }
  ```
