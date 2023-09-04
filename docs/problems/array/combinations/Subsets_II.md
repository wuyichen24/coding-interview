# Subsets II

## Alias
- Leetcode (90): [Subsets II](https://leetcode.com/problems/subsets-ii/)

## Problem
Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

## Examples
- Example 1
   - Input
     ```
     [1,2,2]
     ```
   - Output
     ```
     [[],[1],[1,2],[1,2,2],[2],[2,2]]
     ```

## Solutions
- Solution 1: Backtracking

  ```java
  public List<List<Integer>> subsetsWithDup(int[] nums) {
      List<List<Integer>> resultList = new ArrayList<>();
      Arrays.sort(nums);
      backtrack(resultList, new ArrayList<>(), nums, 0);
      return resultList;
  }

  private void backtrack(List<List<Integer>> resultList, List<Integer> tempList, int [] nums, int start){
      resultList.add(new ArrayList<>(tempList));
      for(int i = start; i < nums.length; i++){
          if(i > start && nums[i] == nums[i-1]) continue;    // skip duplicates
          tempList.add(nums[i]);
          backtrack(resultList, tempList, nums, i + 1);
          tempList.remove(tempList.size() - 1);
      }
  }
  ```
