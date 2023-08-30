# Merge Intervals

## Alias
- Leetcode (56): [Merge Intervals](https://leetcode.com/problems/merge-intervals/)

## Problem
- Given an array of intervals where intervals[i] = [starti, endi].
- Merge all overlapping intervals.
- Return an array of the non-overlapping intervals that cover all the intervals in the input.

## Examples
- Example 1
   - Input
     ```
     [[1,3],[2,6],[8,10],[15,18]]
     ```
   - Output
     ```
     [[1,6],[8,10],[15,18]]
     ```
   - Explanation
      - Since intervals `[1,3]` and `[2,6]` overlap, merge them into `[1,6]`.
- Example 2
   - Input
     ```
     [[1,4],[4,5]]
     ```
   - Output
     ```
     [[1,5]]
     ```
   - Explanation
      - Intervals `[1,4]` and `[4,5]` are considered overlapping.
## Solutions
- Solution 1: Brute Force
  ```java
  public int[][] merge(int[][] intervals) {
      if (intervals.length < 2) {
          return intervals;
      }
        
      List<int[]> resultList = new ArrayList<>();
        
      resultList.add(intervals[0]);
        
      for (int i = 1; i < intervals.length; i++) {
          int l1 = intervals[i][0];
          int r1 = intervals[i][1];
            
          boolean needAdd = true;
            
          for (int j = 0; j < resultList.size(); j++) {
              int l2 = resultList.get(j)[0];
              int r2 = resultList.get(j)[1];
                
              if (l1 < l2) {
                  if (r1 >= r2) {
                      // 1 include 2: remove 2, add 1
                      resultList.remove(j);
                      j--;
                  } else if (r1 >= l2) {
                      // 1 right touch 2: merge 1 + 2
                      r1 = r2;
                      resultList.remove(j);
                      j--;
                  }
              } else {
                  if (r1 <= r2) {
                      // 2 include 1: ignore 1
                      needAdd = false;
                      break;
                  } else if (l1 <= r2) {
                      // 1 left touch 2: merge 2 + 1
                      l1 = l2; 
                      resultList.remove(j);
                      j--;
                  }
              }
          }
            
          if (needAdd) {
              resultList.add(new int[]{l1, r1});
          }
      }
        
      int[][] resultArray = new int[resultList.size()][2];
        
      for (int i = 0; i < resultList.size(); i++) {
          resultArray[i] = resultList.get(i);
      }
        
      return resultArray;
  }
  ```
