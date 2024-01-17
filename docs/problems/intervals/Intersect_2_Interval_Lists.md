# Intersect 2 Interval Lists

## Alias
- Leetcode (986): [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)

## Problem
You are given two lists of closed intervals, `firstList` and `secondList`, where `firstList[i] = [starti, endi]` and `secondList[j] = [startj, endj]`. Each list of intervals is pairwise **disjoint** and in **sorted order**.

Return the intersection of these two interval lists.

A **closed interval** `[a, b]` (with `a <= b`) denotes the set of real numbers `x` with `a <= x <= b`.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of `[1, 3]` and `[2, 4]` is `[2, 3]`.

> Summary: Get the intersection of 2 interval lists.

## Example
- First list: `[[0,2],[5,10],[13,23],[24,25]]`
- Second list: `[[1,5],[8,12],[15,24],[25,26]]`
- Output list: `[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]`
- Explanation:

  ![interval1](https://user-images.githubusercontent.com/8989447/116320084-d6fecd80-a774-11eb-9199-9fd72d4d311a.png) 
  
## Solution
- **Solution 1**
   - Idea
      - Use 2 pointers on 2 lists respectively to compare intervals between 2 lists.
      - When compare 2 interval.
         - For 2 start points, find the larger one (`larger_start`).
         - For 2 end points, find the smaller one (`smaller_end`).
         - If `larger start < smaller end`, there is an intersection.
      - Move forward 2 pointers
         - Which interval's end is smaller, move that interval (pointer).
        
  ```java
  public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
      List<int[]> result = new ArrayList();
      int i = 0, j = 0;

      while(i < firstList.length && j < secondList.length) {
          int largerStart = Math.max(firstList[i][0], secondList[j][0]);
          int smallerEnd  = Math.min(firstList[i][1], secondList[j][1]);

          if (largerStart <= smallerEnd) {
              result.add(new int[]{largerStart, smallerEnd});
          }

          if (firstList[i][1] < secondList[j][1]) {
              i++;
          } else {
              j++;
          }
      }

      return result.toArray(new int[result.size()][]);
  }
  ```
