# Watch Comedy And Drama

## Problem
Amazon Prime Video has movies in the category 'comedy' or 'drama'. Determine the earliest time you can finish at least one movie from each category. The release schedule and duration of the movies are provided.

- You can start watching a movie at the time it is released or later.
- If you begin a movie at time *t*, it ends at time *t + duration*.
- If a movie ends at time *t + duration*, the second can start at that time, *t + duration*, or later.
- The movies can be watched in any order.

#### Example
*comedyReleaseTime = [1, 4]*
*comedyDuration = [3, 2]*
*dramaReleaseTime = [5, 2]*
*dramaDuration = [2, 2]*

Duration and release times are aligned by index.

Two of the best ways to finish watching one movie from each category at the earliest time are as follows:
- Start watching comedy *movie1* at time *t = 1* and until *t = 1 + 3 = 4*. Then, watch the drama *movie2* from time *t = 4* to *t = 4 + 2 = 6*.
- Start watching drama *movie2* at time *t = 2* and until *t = 2 + 2 = 4*. Then, watch the comedy *movie2* from time *t = 4* to *t = 4 + 2 = 6*.

The earliest finish time  and also the answer is 6.

#### Function Description
Complete the function *minimumTimeSpent* in the editor below.

*minimumTimeSpent* has the following parameters:
- *int comedyReleaseTime[n]*: release times
- *int comedyDuration[n]*: durations
- *int dramaReleaseTime[n]*: release times
- *int dramaDuration[n]*: duration

#### Return
*int*: the earliest time you can finish watching two movies

## Solutions
- **Solution 1: Convert to intervals**
   - Idea
      - Convert the release time and duration to inverals
      - Sort intervals by start time.
      - Write a generic function to get the earliest finish time for the intervals which are after the start time
      - Get 2 earliest finish times if start from comedy or drama.
      - Get the smaller earliest finish time.

  ```java
  public class Solution {
      public int minimumTimeSpent(int[] comedyReleaseTime, int[] comedyDuration, int[] dramaReleaseTime, int[] dramaDuration) {
          List<int[]> comedyIntervals = new ArrayList<>();
          List<int[]> dramaIntervals = new ArrayList<>();

          // convert release time and duration to interval
          for (int i = 0; i < comedyReleaseTime.length; i++) {
              comedyIntervals.add(new int[] {comedyReleaseTime[i],comedyReleaseTime[i] + comedyDuration[i]});
          }

          for (int i = 0; i < dramaReleaseTime.length; i++) {
              dramaIntervals.add(new int[] {dramaReleaseTime[i],dramaReleaseTime[i] + dramaDuration[i]});
          }

          // sort interval by start time
          Collections.sort(comedyIntervals, (a, b) -> {return Integer.compare(a[0], b[0]);});
          Collections.sort(dramaIntervals, (a, b) -> {return Integer.compare(a[0], b[0]);});

          // start from comedy
          int earliestComedy1 = getEarliestFinishTime(0, comedyIntervals);
          int earliestComedy2 = getEarliestFinishTime(earliestComedy1, dramaIntervals);

          // start from drama
          int earliestDrama1 = getEarliestFinishTime(0, dramaIntervals);
          int earliestDrama2 = getEarliestFinishTime(earliestDrama1, comedyIntervals);

          return Math.min(earliestComedy2, earliestDrama2);
      }

      public int getEarliestFinishTime(int startTime, List<int[]> movies) {
          int earliest = Integer.MAX_VALUE;
          for (int i = 0; i < movies.size(); i++) {
              if (movies.get(i)[0] >= startTime) {             // current interval is after start time
                  if (movies.get(i)[1] < earliest) {           // end time of current interval is earlier
                      earliest = movies.get(i)[1];             // save the best earliest time
                  }
              }
          }
          return earliest;
      }
  }
  ```
