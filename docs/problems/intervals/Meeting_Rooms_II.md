# Meeting Rooms II

## Alias
- Leetcode (253): [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)

## Problem
Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of conference rooms required.

## Examples
- Example 1
   - Input
     ```
     [[0,30],[5,10],[15,20]]
     ```
   - Output
     ```
     2
     ```
- Example 2
   - Input
     ```
     [[7,10],[2,4]]
     ```
   - Output
     ```
     1
     ```

## Solutions
- Solution 1: Sorting
   - Idea
      - Sort the starts and ends of intervals respectively and compare starts with ends.
   - Steps
      - Separate intervals into starts array and ends array.
      - Sort starts array and ends array.
      - Compare each start with ends
         - If the start of event `i` happen before the end of event `Itr`, so we need 1 more room.
         - If the start of event `i` happen after the end of event `Itr`, so no need have more room. So check the end of the next event.
       
  ```java
  public int minMeetingRooms(int[][] intervals) {
      int[] starts = new int[intervals.length];
      int[] ends   = new int[intervals.length];
      for(int i=0; i < intervals.length; i++) {
          starts[i] = intervals[i][0];
          ends[i] = intervals[i][1];
      }

      Arrays.sort(starts);
      Arrays.sort(ends);
        
      int rooms   = 0;
      int endsItr = 0;                   
      for(int i=0; i < starts.length; i++) {
          if(starts[i] < ends[endsItr])  // if the start of event i happen before the end of event Itr,  
              rooms++;                   // so need 1 more room
          else                           // if the start of event i happen after the end of event Itr,
              endsItr++;                 // check the end of the next event
      }
      return rooms;
  }
  ```
