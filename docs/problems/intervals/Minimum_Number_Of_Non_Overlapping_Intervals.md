# Minimum Number of Non-Overlapping Intervals

## Alias
- Leetcode (452): [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

## Problem
There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up **directly vertically** (in the positive y-direction) from different points along the x-axis. A balloon with `xstart` and `xend` is burst by an arrow shot at `x` if `xstart <= x <= xend`. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array points, return the **minimum** number of arrows that must be shot to burst all balloons.

> Summary: Count minimum number of non-overlapping intervals

## Examples
- Example 1
   - Input
     ```
     points = [[10,16],[2,8],[1,6],[7,12]]
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - The balloons can be burst by 2 arrows:
         - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
         - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
- Example 2
   - Input
     ```
     points = [[1,2],[3,4],[5,6],[7,8]]
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - One arrow needs to be shot for each balloon for a total of 4 arrows.
- Example 3
   - Input
     ```
     points = [[1,2],[2,3],[3,4],[4,5]]
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - The balloons can be burst by 2 arrows:
         - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
         - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].

## Solutions
- **Solution 1: Sort intervals**
   - Idea
      - Sort the intervals by their end points and compare 2 adjacent intervals
      - Let each interval compare the start time with the end time of the previous interval.

        <img width="592" alt="Screenshot 2024-01-17 at 3 47 51 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/b4e6167b-860b-4b66-92e4-76b27e1f43c8">

      - Note that 2 intervals are overlapping even if only boundaries are overlapping.

        <img width="378" alt="Screenshot 2024-01-17 at 3 50 13 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/ae145f56-41bd-4de9-9e4f-bdadb57d91cd">


  ```java
  public int findMinArrowShots(int[][] points) {
      if (points.length == 0) return 0;
        
      Arrays.sort(points, (a, b)-> a[1]-b[1]);

      int end = points[0][1];
      int count = 1;
      for (int[] interval : points) {
          int start = interval[0];
          if (start > end) {
              count++;
              end = interval[1];
          }
      }
      return count;
  }
  ```
