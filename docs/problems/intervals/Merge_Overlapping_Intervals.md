# Merge Overlapping Intervals

## Alias
- Leetcode (56): [Merge Intervals](https://leetcode.com/problems/merge-intervals/)

## Problem
- Given an array of intervals where intervals[i] = [starti, endi].
- Merge all overlapping intervals.
- Return an array of the non-overlapping intervals that cover all the intervals in the input.

## Examples
- Example 1
   - Input
     ```
     [[1,3],[2,6],[8,10],[15,18]]
     ```
   - Output
     ```
     [[1,6],[8,10],[15,18]]
     ```
   - Explanation
      - Since intervals `[1,3]` and `[2,6]` overlap, merge them into `[1,6]`.
- Example 2
   - Input
     ```
     [[1,4],[4,5]]
     ```
   - Output
     ```
     [[1,5]]
     ```
   - Explanation
      - Intervals `[1,4]` and `[4,5]` are considered overlapping.
## Solutions
- **Solution 1: Sort intervals**
   - Idea
      - Sort the intervals by their starting points and compare 2 adjacent intervals.
   - Steps
      - Sort the intervals by their starting points.
      - Take the first interval and compare its end with the next intervals starts.
         - If there is an overlapping, update the end to be the max end of the 2 overlapping intervals.
         - If there is no overlapping, add the next interval to the result list.
   - Time complexity
      - *O(nlog(n))*
         - Sorting takes *O(nlog(n))* and merging intervals takes *O(n)*.
           
  ```java
  public int[][] merge(int[][] intervals) {
      if (intervals.length <= 1)
          return intervals;

      // Sort by ascending starting point
      Arrays.sort(intervals, (i1, i2) -> Integer.compare(i1[0], i2[0]));

      List<int[]> result = new ArrayList<>();
      int[] current = intervals[0];
      result.add(current);
      for (int[] next : intervals) {
           if (next[0] <= current[1]) { // Overlapping intervals, take the max end
               current[1] = Math.max(current[1], next[1]);
           } else {                             // Disjoint intervals, add the new interval to the list
               current = next;
               result.add(current);
           }
      }

      return result.toArray(new int[result.size()][]);
  }
  ```
