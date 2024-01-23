# Merge Two Sorted Interval Arrays

## Problem
Consider the concept of a 'sorted, non-overlapping interval list' - which is an array of intervals that don't overlap with each other and are sorted by interval start.

Given two of these interval lists, return a 3rd interval list that is the union of the input interval lists.

## Solutions
- **Solution 1: Sweep line algorithm**
   - Idea
      - Merge 2 intervals lists as one.
      - Sort intervals by start point.
      - Compare the current interval with next one:
         - If overlapping, take the max of end points.
         - If no overlapping, add the current interval to result list.

  ```java
  public List<Interval> mergeIntervals(List<Interval> intervals1, List<Interval> intervals2) {
      List<Interval> mergedIntervals = new ArrayList<>();
      mergedIntervals.addAll(intervals1);
      mergedIntervals.addAll(intervals2);

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
  ```
