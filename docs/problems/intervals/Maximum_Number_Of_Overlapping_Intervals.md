# Maximum Number of Overlapping Intervals

## Alias
- Lintcode (391): [Number of Airplanes in the Sky](https://www.lintcode.com/problem/391/)

## Problem
Given an list `intervals`, which are taking off and landing time of the flight. How many airplanes are there at most at the same time in the sky?

## Examples
- Example 1
   - Input
     ```
     [[1,10],[2,3],[5,8],[4,7]]
     ```
   - Output
     ```
     3
     ```
- Example 2
   - Input
     ```
     [[1,2],[2,3],[3,4]]
     ```
   - Output
     ```
     1
     ```
   - Explanation
      - Landing happen before taking off.
    
## Solutions
- **Solution 1: Sweep line algorithm**
   - Idea
      - Split the start points and end points of all the intervals.
         - For start point, use 1.
         - For end point, use -1.
      - Sort the points based on position and type (start or end).
      - Traverse all the points, when meeting a point
         - If start point, increase the counter by 1.
         - If end point, decrease the counter by 1.
       
  ```java
  public int minMeetingRooms(int[][] intervals) {        
      List<Integer[]> list = new ArrayList<>();
      for (int i = 0; i < intervals.length; i++) {
          list.add(new Integer[]{intervals[i][0], 1});   // start point use 1
          list.add(new Integer[]{intervals[i][1], -1});  // end point use -1
      }

      Collections.sort(list, (a, b) -> {
          int cmp = Integer.compare(a[0], b[0]);
          if (cmp != 0) {
              return cmp;
          }
          return Integer.compare(a[1], b[1]);
      });

      int counter = 0;
      int max = 0;
      for (Integer[] point : list) {
          counter = counter + point[1];
          max = Math.max(max, counter);
      }
      return max;
  }
  ```
