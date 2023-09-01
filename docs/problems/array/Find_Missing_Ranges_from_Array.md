# Find Missing Ranges from Array

## Alias
- Leetcode (163): [Missing Ranges](https://leetcode.com/problems/missing-ranges/)

## Problem
- Given a sorted array from [0, 99], output missing numbers as a string, separated by comma. If there are more than 2 consecutive numbers, output the first and the last separated by hyphen.

## Examples
- Example 1
   - Input: `[2, 4, 7, 13, 20]`
   - Output: `"0,1,3,5,6,8-12,14-19,21-99"`

## Solutions
- Solution 1: My solution in the interview.
   - Idea
      - Find all missing numbers.
      - Generate the output string based on the requirement.
  ```java
  public String getMissingNumber(int[] nums) {
      StringBuilder sb = new StringBuilder();
  
      List<Integer> missingList = new ArrayList<>();
      for(int i = 0; i < 100; i++) {
          if (!isInArray(nums, i)) {
              missingList.add(i); 
          }
      }
     
      int intervalBegin = missingList(0);                                   // Remember the begin of each consecutive interval
      for (int i = 0; i < missingList.size() - 1; i++) {
          if (missingList.get(i+1) - missingList.get(i) > 1) {              // If the gap of element(i+1) and element(i) greater than 1. it means that element(i+1) and element(i) are not consecutive.
                                                                            // So we need to add the previous interval [intervalBegin, element(i)] into the list
              if (intervalBegin == missingList.get(i)) {                    // If the interval begin = the interval end, it means that it is a single number
                  sb.append(missingList.get(i) + ",");
              } else {
                  sb.append(intervalBegin + "-" + missingList.get(i) + ",");// If the interval begain != the interval end, it means that there are multiple numbers in that range
              }
              intervalBegin = missingList.get(i+1);
          }
      }
      return sb.substring(0, sb.length);
  }
  
  public boolean isInArray(int[] nums, int target) {
      for (int i = 0; i < nums.length; i++) {
          if (nums[i] == target) return true;
      }
      return false;
  }
  ```

- Solution 2: Leedcode solution
   - Idea
      - Use each number in range as a seperator of missing ranges.

  ```java
  public List<List<Integer>> findMissingRanges(int[] nums, int lower, int upper) {
      List<List<Integer>> ranges = new ArrayList<>();
      int start = lower;
        
      for (int num: nums) {
          if (num > upper) {
              break;
          }
          if (num > start) {
              ranges.add(Arrays.asList(start, num - 1));
          }
          start = num + 1;
      }
        
      if (start <= upper) {
          ranges.add(Arrays.asList(start, upper));   
      }
        
      return ranges;
  }
  ```
