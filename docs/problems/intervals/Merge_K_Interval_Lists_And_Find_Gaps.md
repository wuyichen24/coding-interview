# Merge K Interval Lists And Find Gaps

## Alias
- Leetcode (759): [Employee Free Time](https://leetcode.com/problems/employee-free-time/)

## Problem
We are given a list `schedule` of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping `Intervals`, and these intervals are in sorted order.

Return the list of finite intervals representing **common, positive-length free time** for all employees, also in sorted order.

(Even though we are representing Intervals in the form `[x, y]`, the objects inside are Intervals, not lists or arrays. For example, `schedule[0][0].start = 1`, `schedule[0][0].end = 2`, and `schedule[0][0][0]` is not defined).  Also, we wouldn't include intervals like `[5, 5]` in our answer, as they have zero length.

> Summary: Given K lists of intervals, merge them and find gaps in the merged interval list.

## Solution
- **Solution 1: Merge and find gaps**
   - Idea
      - Merge multiple interval lists as one non-overlapping interval list (Use the solution of [Merge Overlapping Intervals](Merge_Overlapping_Intervals.md)).
      - Find the gaps between intervals by comparing 2 adjacent intervals.
    
  ```java
  class Solution {
      public List<Interval> employeeFreeTime(List<List<Interval>> schedule) {
          // Merge multiple interval lists as one non-overlapping interval list
          List<Interval> intervals = mergeIntervals(schedule);
 
          // Find the gaps between intervals by comparing 2 adjacent intervals
          List<Interval> gapList = new ArrayList<Interval>();
          for (int i = 0; i < intervals.size() - 1; i++) {
              gapList.add(new Interval(intervals.get(i).end, intervals.get(i+1).start));
          }

          return gapList;
      }

      public List<Interval> mergeIntervals(List<List<Interval>> schedule) {
          List<Interval> mergedIntervals = new ArrayList<>();
          for (List<Interval> intervals : schedule) {
              mergedIntervals.addAll(intervals);
          }

          Collections.sort(mergedIntervals, (a, b) -> {
              return a.start - b.start;
          });

          List<Interval> result = new ArrayList<>();
          Interval newInterval = mergedIntervals.get(0);
          result.add(newInterval);
          for (Interval interval : mergedIntervals) {
              if (interval.start <= newInterval.end) {
                  newInterval.end = Math.max(newInterval.end, interval.end);
              } else {  
                  newInterval = interval;
                  result.add(newInterval);
              }
          }

          return result;
      }
  }
  ```
