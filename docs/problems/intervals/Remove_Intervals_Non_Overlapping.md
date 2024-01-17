# Remove Intervals for Non-overlapping

## Alias
- Leetcode (435): [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

## Problem
Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

## Examples
- Example 1
   - Input
     ```
     [[1,2],[2,3],[3,4],[1,3]]
     ```
   - Output
     ```
     1
     ```
   - Explanation
      - `[1,3]` can be removed and the rest of the intervals are non-overlapping.
- Example 2
   - Input
     ```
     [[1,2],[1,2],[1,2]]
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - You need to remove two `[1,2]` to make the rest of the intervals non-overlapping.
- Example 3
   - Input
     ```
     [[1,2],[2,3]]
     ```
   - Output
     ```
     0
     ```
   - Explanation
      - You don't need to remove any of the intervals since they're already non-overlapping.

## Solutions
- **Solution 1: Sort intervals**
   - Idea
      - Sort the intervals by their end pints and compare 2 adjacent intervals
         - Let each interval compare the start time with the end time of the previous interval.

  ```java
  public int eraseOverlapIntervals(int[][] intervals) {
      if(intervals == null || intervals.length== 0) return 0;

      Arrays.sort(intervals, (a, b)-> a[1]-b[1]);

      int end = intervals[0][1];
      int count = 1;
      for(int i = 1; i < intervals.length; i++){
          if (intervals[i][0] >= end){       // If the current interval start time is after the end of the previous interval
              end = intervals[i][1];
              count++;
          }
      }
      return intervals.length - count;
  }
  ```
