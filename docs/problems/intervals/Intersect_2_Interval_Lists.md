# Intersect 2 Interval Lists

## Alias
- Leetcode (986): [Merge Intervals](https://leetcode.com/problems/merge-intervals/)

## Problem
- Get the intersection of 2 interval lists.

## Example
- First list: `[[0,2],[5,10],[13,23],[24,25]]`
- Second list: `[[1,5],[8,12],[15,24],[25,26]]`
- Output list: `[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]`
- Explanation:

  ![interval1](https://user-images.githubusercontent.com/8989447/116320084-d6fecd80-a774-11eb-9199-9fd72d4d311a.png) 
  
## Solution
- Solution 1
  ```java
  public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
      if (firstList == null || secondList == null) {
          return null;
      }
        
      List<Integer[]> resultList = new ArrayList();
        
      for (int i = 0; i < firstList.length; i++) {
          int l1 = firstList[i][0];
          int r1 = firstList[i][1];
            
          for (int j = 0; j < secondList.length; j++) {
              int l2 = secondList[j][0];
              int r2 = secondList[j][1];
                
              if (l1 > r2 || r1 < l2) {                         // Case 1: 2 intervals don't touch at all
                  continue;
              } else {                                          // Case 2: 2 intervals touch,
                  int newL = l1 < l2 ? l2 : l1;                 //         Find the left and right for the intersection
                  int newR = r1 > r2 ? r2 : r1;
                
                  resultList.add(new Integer[]{newL, newR});
              }
          }
      }
                                   
      int[][] resultArray = new int[resultList.size()][2];
                                   
      for (int i = 0; i < resultList.size(); i++) {
          resultArray[i][0] = resultList.get(i)[0];
          resultArray[i][1] = resultList.get(i)[1];
      }
                                   
      return resultArray;
  }
  ```
