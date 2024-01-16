# Merge K Interval Lists And Find Gaps

## Alias
- Leetcode (759): [Employee Free Time](https://leetcode.com/problems/employee-free-time/)

## Problem
We are given a list `schedule` of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping `Intervals`, and these intervals are in sorted order.

Return the list of finite intervals representing **common, positive-length free time** for all employees, also in sorted order.

(Even though we are representing Intervals in the form `[x, y]`, the objects inside are Intervals, not lists or arrays. For example, `schedule[0][0].start = 1`, `schedule[0][0].end = 2`, and `schedule[0][0][0]` is not defined).  Also, we wouldn't include intervals like `[5, 5]` in our answer, as they have zero length.

> Summary: Given K lists of intervals, merge them and find gaps in the merged interval list.

## Solution
- Solution 1
  ```java
  class Solution {
      public List<Interval> employeeFreeTime(List<List<Interval>> schedule) {
          // Merge all the interval into one list
          List<Interval> mergeList = schedule.get(0);
          for(int i = 1; i < schedule.size(); i++) {
              mergeList = merge2IntervalLists(schedule.get(i), mergeList);
          }
        
          // Sort by start
          Comparator<Interval> compareByStart = new Comparator<Interval>() {
              @Override
              public int compare(Interval o1, Interval o2) {
                  return o1.start - o2.start;
              }
          };
          Collections.sort(mergeList, compareByStart);
        
          // Find the gap between intervals 
          List<Interval> gapList = new ArrayList<Interval>();
          for (int i = 0; i < mergeList.size() - 1; i++) {
              gapList.add(new Interval(mergeList.get(i).end, mergeList.get(i+1).start));
          }
        
          return gapList;
      }
    
      public List<Interval> merge2IntervalLists(List<Interval> list1, List<Interval> list2) {
          for (int i = 0; i < list1.size(); i++) {
              int l1 = list1.get(i).start;
              int r1 = list1.get(i).end;
           
              boolean needAdd = true;
          
              for (int j = 0; j < list2.size(); j++) {
                  int l2 = list2.get(j).start;
                  int r2 = list2.get(j).end;
              
                  if (l1 < l2) {
                      if (r1 >= r2) {
                          // 1 include 2: remove 2, add 1
                          list2.remove(j);
                          j--;
                      } else if (r1 >= l2) {
                          // 1 right touch 2: merge 1 + 2
                          r1 = r2;
                          list2.remove(j);
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
                          list2.remove(j);
                          j--;
                      }
                  }
              }
          
              if (needAdd) {
                  list2.add(new Interval(l1, r1));
              }
          }
        
          return list2;
      }
  }
  ```
