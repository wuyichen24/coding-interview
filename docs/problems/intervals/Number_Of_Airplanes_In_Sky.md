# Number of Airplanes in Sky

## Alias
- Linttcode (391): [Number of Airplanes in the Sky](https://www.lintcode.com/problem/391/)

## Problem
Given an list `interval`, which are taking off and landing time of the flight. How many airplanes are there at most at the same time in the sky?

## Examples
- Example 1
   - Input
     ```
     [(1, 10), (2, 3), (5, 8), (4, 7)]
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - The first airplane takes off at 1 and lands at 10.
      - The second ariplane takes off at 2 and lands at 3.
      - The third ariplane takes off at 5 and lands at 8.
      - The forth ariplane takes off at 4 and lands at 7.
      - During 5 to 6, there are three airplanes in the sky.
- Example 2
   - Input
     ```
     [(1, 2), (2, 3), (3, 4)]
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
  public int countOfAirplanes(List<Interval> airplanes) {
      List<Integer[]> list = new ArrayList<>();
      for (Interval i : airplanes) {
          list.add(new Integer[]{i.start, 1});     // start point use 1
          list.add(new Integer[]{i.end, -1});      // end point use -1
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
