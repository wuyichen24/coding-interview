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
- **Solution 1: Sort intervals**
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
- **Solution 2: Priority queue**
   - Idea
      - Use priority queue to track the merged intervals.
   - Steps
      - Sort the intervals by start time.
      - Create a priority queue to track the minimum end time of merged intervals.
      - Add the first meeting into the priority queue
          - Compare each interval with the interval from the priority queue
             - If the current meeting starts right after, there's no need for a new room, merge the interval.
             - Otherwise, this meeting needs a new room.
           
  ```java
  public int minMeetingRooms(int[][] intervals) {        
      Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    
      PriorityQueue<int[]> queue = new PriorityQueue<int[]>(intervals.length, (int[] a, int[] b) -> a[1] - b[1]);
    
      queue.offer(intervals[0]);
    
      for (int i = 1; i < intervals.length; i++) {
          int[] interval = queue.poll();
            
          if (intervals[i][0] >= interval[1])   // if the current meeting starts right after,
              interval[1] = intervals[i][1];    // there's no need for a new room, merge the interval
          else
              queue.offer(intervals[i]);        // otherwise, this meeting needs a new room
        
          queue.offer(interval);                // don't forget to put the meeting room back
      }
    
      return queue.size();
  }
  ```
       

