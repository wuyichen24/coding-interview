# Check Intervals Have Overlapping

## Alias
- Leetcode (252): [Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)

## Problem
Given an array of meeting time `intervals` where `intervals[i] = [starti, endi]`, determine if a person could attend all meetings.

## Examples
- Example 1
   - Input
     ```
     [[0,30],[5,10],[15,20]]
     ```
   - Output
     ```
     false
     ```
- Example 2
   - Input
     ```
     [[7,10],[2,4]]
     ```
   - Output
     ```
     true
     ```

## Solutions
- **Solution 1: Sort intervals**
   - Idea
      - Sort the intervals by their starting points and compare 2 adjacent intervals.
    
  ```java
  public boolean canAttendMeetings(int[][] intervals) {
      Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        
      for (int i = 1; i < intervals.length; i++) {
          if (intervals[i - 1][1] > intervals[i][0])
              return false;
            
      }
      return true;
  }
  ```
