# Processing Tasks

## Problem

There is a task recorded in the two-dimensional array tasks in the format [start, end, period], indicating that the task needs to be completed within the time range start to end, and period indicates the length of time required to complete the task. Note:
1. The period can be discontinuous time.
2. The start and end are included.
3. The computer can handle an unlimited number of tasks at the same time. 

Please calculate the minimum time that the computer can process all the tasks.

## Examples
- Example 1
   - Input
     ```
     tasks = [[1,3,2], [2,5,3], [5,6,2]
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - tasks[0] selects time points 2, 3.
      - tasks[1] selects time points 2, 3, 5.
      - tasks[2] selects time points 5, 6.
      - So the computer only needs to be on at time points 2, 3, 5 and 6 to complete the task.
    
        ![Processing_Tasks drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/495cef9f-4ad9-4de2-ad97-bc34f8b0df1a)

## Solutions
- Solution 1: Sweepline algorithm
   - Idea
      - Split the starting and ending points for each task and sort them by time and type (let the starting point is front of the ending point if both of them have the same time).
        ```
        [1,3,2], [2,5,3],[5,6,2]
        split as
        (1,2,starting), (2,3, starting), (3,ending), (5,2, starting), (5,ending), (6,ending)
        ```
      - Loop through those points
         - When we meet a starting point, we store when it starts and how many time it needs.
         - When we meet an ending point, we identify the ending’s corresponding starting point, and check how much time it still needs. we substract its time from all active tasks we met.
  **Java**
  ```
  public int minProcessingTime(int[][] tasks) {
      int res = 0;
      Map<Integer, int[]> active = new HashMap<>();
      List<int[]> stack = new ArrayList<>();

      for (int i = 0; i < tasks.length; i++) {
          int start = tasks[i][0];
          int end = tasks[i][1];
          int load = tasks[i][2];

          stack.add(new int[]{start, 0, load, i});  // use 0 to indicate a starting point
          stack.add(new int[]{end, 1, load, i});    // use 1 to indicate an ending point
      }

      Collections.sort(stack, (a, b) -> {
          int cmp = Integer.compare(a[0], b[0]);
          if (cmp != 0) {
              return cmp;
          }
          return Integer.compare(a[1], b[1]);
      });

      for (int[] event : stack) {
          int pt = event[0];
          int type = event[1];
          int load = event[2];
          int i = event[3];

          if (type == 0) {
              active.put(i, new int[]{pt, load});
              continue;
          }

          int unUsed = active.get(i)[1];
          res += unUsed;

          if (unUsed > 0) {
              for (int j : active.keySet()) {
                  int[] activeJ = active.get(j);
                  int use = Math.min(Math.min(activeJ[1], pt - activeJ[0] + 1), unUsed);
                  activeJ[1] -= use;
                  activeJ[0] += use;
              }
          }

          active.remove(i);
      }

      return res;
  }
  ```

  **Python** (original solution)
  ```python
  def findMinimumTime(tasks):
      stack, res, active = [], 0, dict()

      for i, (start, end, pt) in enumerate(tasks):
          stack += [(start, 0, pt, i), (end, 1, pt, i)]

      for t, d, pt, i in sorted(stack):
          print(t, d, pt, i)
          if 1 - d:
              active[i] = [t, pt]
              continue

          un_used = active[i][1]
          res += un_used

          if un_used:
              for j in active:
                  use = min(active[j][1], t - active[j][0] + 1, un_used)
                  active[j][1] -= use
                  active[j][0] += use

          del active[i]

      return res
  ```
## References
- [Leetcode - Weekly Contest 336](https://leetcode.com/contest/weekly-contest-336/problems/minimum-time-to-complete-all-tasks/)
- [Leetcode - Weekly Contest 336 - Solution](https://leetcode.com/contest/weekly-contest-336/problems/minimum-time-to-complete-all-tasks/)
- [Leetcode - Discussion about the problem](https://leetcode.com/discuss/interview-question/2770147/an-interesting-oa-question-expedia/1671632)
