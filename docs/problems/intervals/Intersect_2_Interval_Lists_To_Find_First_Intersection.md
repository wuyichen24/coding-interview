# Intersect 2 Interval Lists to Find First Intersection

## Alias
- Leetcode (1229): [Meeting Scheduler](https://leetcode.com/problems/meeting-scheduler/)

## Problem
Given the availability time slots arrays `slots1` and `slots2` of two people and a meeting duration `duration`, return the earliest time slot that works for both of them and is of duration `duration`.

If there is no common time slot that satisfies the requirements, return an empty array.

The format of a time slot is an array of two elements `[start, end]` representing an inclusive time range from `start` to `end`.

It is guaranteed that no two availability slots of the same person intersect with each other. That is, for any two time slots `[start1, end1]` and `[start2, end2]` of the same person, either `start1 > end2` or `start2 > end1`.

## Examples
- Example 1
   - Input
     ```
     slots1 = [[10,50],[60,120],[140,210]]
     slots2 = [[0,15],[60,70]]
     duration = 8
     ```
   - Output
     ```
     [60,68]
     ```
- Example 2
   - Input
     ```
     slots1 = [[10,50],[60,120],[140,210]]
     slots2 = [[0,15],[60,70]]
     duration = 12
     ```
   - Output
     ```
     []
     ```

## Solution
- **Solution 1**
   - Idea
      - Use 2 pointers on 2 lists respectively to compare intervals between 2 lists.
      - Sort 2 lists by start time.
      - When compare 2 interval.
         - For 2 start points, find the larger one (`larger_start`).
         - For 2 end points, find the smaller one (`smaller_end`).
         - If `larger start < smaller end`, there is an intersection.
         - If the length of the intersection > duration, return the result.
      - Move forward 2 pointers
         - Which interval's end is smaller, move that interval (pointer).
       
  ```java
  public List<Integer> minAvailableDuration(int[][] slots1, int[][] slots2, int duration) {
      Arrays.sort(slots1, (a,b) -> a[0] - b[0]);
      Arrays.sort(slots2, (a,b) -> a[0] - b[0]);

      int i = 0, j = 0;
      int n1 = slots1.length, n2 = slots2.length;

      while (i < n1 && j < n2) {
          int largerStart = Math.max(slots1[i][0], slots2[j][0]);
          int smallerEnd  = Math.min(slots1[i][1], slots2[j][1]);

          if (smallerEnd - largerStart >= duration) {
              return List.of(largerStart, largerStart + duration);
          }

          if (slots1[i][1] < slots2[j][1]) {
              i++;
          } else {
              j++;
          }
      }

      return new ArrayList<>();
  }
  ```
